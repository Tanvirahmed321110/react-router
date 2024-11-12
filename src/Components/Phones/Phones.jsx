import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Phones = () => {

    const [phones, setPhones] = useState([])
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => console.log(data.data))
        // // console.log(phones)

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => {
                const data = res.data.data;
                const fakeData = data.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })

                console.log(fakeData)
                setPhones(fakeData)
            })
    }, [])

    return (
        <div>
            <ul>
                {
                    phones.map((phone, index) => <li key={index}>{phone.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Phones;