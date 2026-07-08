import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import VisaCard from '../components/VisaCards';

function Home() {
  const [latestVisas ,setLatestVisas]=useState([]);

  useEffect(()=>{
    fetch("https://visa-navigator-server-two-delta.vercel.app/latest-visa")
    .then(res=>res.json())
    .then(data=> setLatestVisas(data))
    .catch(err=>console.log(err));

  },[]);
return (
        <div className="my-12">
            {/* ব্যানার বা অন্য সেকশন থাকলে তার নিচে এটি বসাবে */}
            
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold mb-3 text-primary">Latest Visa Requirements</h2>
                <p className="text-base-content/70 max-w-md mx-auto">
                    Check out the most recently added visa information and stay updated with the latest policies.
                </p>
            </div>

            {/* গ্রিড লেআউটে কার্ডগুলো দেখানো */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
                {
                    latestVisas.map(visa => <VisaCard key={visa._id} visa={visa} />)
                }
            </div>

            {/* See All Visas Button */}
            <div className="text-center mt-12">
                <Link to="/visas" className="btn btn-outline btn-primary px-8 text-lg font-bold">
                    See All Visas
                </Link>
            </div>
        </div>
    );
};

export default Home