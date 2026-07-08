import React from 'react';
import { Link } from 'react-router-dom';

const VisaCard = ({ visa }) => {
    const { _id, country_image, country_name, visa_type, processing_time, fee, validity, application_method } = visa;

    return (
        <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300">
            <figure className="px-6 pt-6">
                <img src={country_image} alt={country_name} className="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-primary">{country_name}</h2>
                <p className="badge badge-secondary font-semibold">{visa_type}</p>
                
                <div className="space-y-2 mt-3 text-sm text-base-content/80">
                    <p><strong>Processing Time:</strong> {processing_time}</p>
                    <p><strong>Visa Fee:</strong> ${fee}</p>
                    <p><strong>Validity:</strong> {validity}</p>
                    <p><strong>Application:</strong> {application_method}</p>
                </div>

                <div className="card-actions mt-6">
                    <Link to={`/visas/${_id}`} className="btn btn-primary btn-sm w-full">
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;