import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';

function VisaDetails() {
    const{id} =useParams();
    const [visa,setVisa] =useState(null);
    const[loading,setLoading]=useState(true);


    useEffect(()=>{
        fetch(`https://visa-navigator-server-two-delta.vercel.app/visas/${id}`)
        .then(res => res.json())
            .then(data => {
                setVisa(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching visa details:", err);
                setLoading(false);
            });
        },[id]);

            if(loading){
                return <Loading></Loading>
            }
            if(!visa){
                return <div className="text-center my-10 text-red-500 font-bold">No Visa Details</div>
            }

            const {country_image,country_name,visa_type,processing_time,required_doc,description,age_restriction,fee,validity,application_method}=visa
        
    

return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-base-100 shadow-xl rounded-2xl border border-base-200">
            {/* কাভায়ার ইমেজ ও দেশের নাম */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8">
                <img src={country_image} alt={country_name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h2 className="text-4xl font-extrabold text-white">{country_name}</h2>
                </div>
            </div>

            {/* ভিসার মূল তথ্যাদি */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3 bg-base-200 p-5 rounded-xl">
                    <p><strong>Visa Type:</strong> <span className="badge badge-secondary">{visa_type}</span></p>
                    <p><strong>Processing Time:</strong> {processing_time}</p>
                    <p><strong>Visa Fee:</strong> ${fee}</p>
                    <p><strong>Validity:</strong> {validity}</p>
                </div>
                <div className="space-y-3 bg-base-200 p-5 rounded-xl">
                    <p><strong>Age Restriction:</strong> {age_restriction}+ years</p>
                    <p><strong>Application Method:</strong> {application_method}</p>
                    <div>
                        <strong className="block mb-1">Required Documents:</strong>
                        <div className="flex flex-wrap gap-2">
                            {required_documents?.map((doc, idx) => (
                                <span key={idx} className="badge badge-outline badge-primary text-xs">{doc}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ভিসার বিবরণ বা ডেসক্রিপশন */}
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-primary">Description</h3>
                <p className="text-base-content/80 leading-relaxed bg-base-100 p-4 border border-base-300 rounded-xl">
                    {description}
                </p>
            </div>

            {/* আবেদন করার মূল বাটন */}
            <div className="text-center">
                <button 
                    onClick={() => document.getElementById('apply_visa_modal').showModal()} 
                    className="btn btn-primary lg:w-1/3 w-full text-lg font-bold"
                >
                    Apply for Visa
                </button>
            </div>

            {/* 🕒 পরবর্তী কাজের জন্য আমরা এখানে মডাল (Modal) এর কোড ইন্টিগ্রেট করব */}
            <dialog id="apply_visa_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-primary">Apply for {country_name} {visa_type}</h3>
                    <p className="py-4 text-sm text-base-content/70">মডালের ভেতরের ফর্ম এবং ডাটাবেজে অ্যাপ্লিকেশন সাবমিশনের কাজ আমরা পরের ধাপে করব।</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default VisaDetails