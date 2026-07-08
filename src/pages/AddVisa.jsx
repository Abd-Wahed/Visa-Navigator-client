import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';

function AddVisa() {
    const {user}=useContext(AuthContext);

    const handleAddVisa =(e)=>{
        e.preventDefault();

        const form = e.target;

        const country_image = form.country_image.value;
        const country_name = form.country_name.value;
        const visa_type=form.visa_type.value;
        const processing_time = form.processing_time.value;
        const description=form.description.value;
        const age_restriction = form.age_restriction.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const application_method = form.application_method.value;
      
        const user_email = user?.email;

        const required_doc = [];
        if(form.doc_passport.checked) required_doc.push("valid passport");
        if(form.doc_application.checked) required_doc.push("Visa Application");
        if(form.doc_photo.checked)required_doc.push("Recent Passport Size Photo");


        const newVisa = {
            country_image,
            country_name,
            visa_type,
            required_doc,
            processing_time,
            age_restriction,
            fee,
            validity,
            application_method,
            user_email
        };
        
        fetch("https://visa-navigator-server-two-delta.vercel.app/visas",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newVisa)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success("Visa Added Successfully!");
                form.reset();
            }
        })
        .catch(err=>{
            toast.error("Failed to add visa, Try again !");
            console.log(err);
        })

    }
  return (
        <div className="max-w-4xl mx-auto my-10 p-8 bg-base-100 shadow-2xl rounded-2xl border border-base-300">
            <h2 className="text-3xl font-extrabold text-center mb-8 text-primary">Add New Visa Information</h2>
            <form onSubmit={handleAddVisa} className="space-y-6">
                
                {/* Row 1: Image & Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Country Image URL</span></label>
                        <input type="url" name="country_image" placeholder="https://example.com/image.jpg" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Country Name</span></label>
                        <input type="text" name="country_name" placeholder="e.g. Bangladesh" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Row 2: Visa Type & Processing Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Visa Type</span></label>
                        <select name="visa_type" className="select select-bordered w-full" required>
                            <option value="Tourist Visa">Tourist Visa</option>
                            <option value="Student Visa">Student Visa</option>
                            <option value="Official Visa">Official Visa</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Processing Time</span></label>
                        <input type="text" name="processing_time" placeholder="e.g. 7-15 business days" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Row 3: Age Restriction & Fee */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Age Restriction (Min Age)</span></label>
                        <input type="number" name="age_restriction" placeholder="e.g. 18" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Visa Fee ($)</span></label>
                        <input type="number" name="fee" placeholder="e.g. 150" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Row 4: Validity & Application Method */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Validity</span></label>
                        <input type="text" name="validity" placeholder="e.g. 90 Days" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-semibold">Application Method</span></label>
                        <input type="text" name="application_method" placeholder="e.g. Online / Embassy" className="input input-bordered w-full" required />
                    </div>
                </div>

                {/* Required Documents (Checkboxes) */}
                <div className="form-control">
                    <label className="label"><span className="label-text font-semibold">Required Documents</span></label>
                    <div className="flex flex-wrap gap-6 bg-base-200 p-4 rounded-lg">
                        <label className="cursor-pointer label space-x-2">
                            <input type="checkbox" name="doc_passport" className="checkbox checkbox-primary" defaultChecked />
                            <span className="label-text">Valid Passport</span>
                        </label>
                        <label className="cursor-pointer label space-x-2">
                            <input type="checkbox" name="doc_application" className="checkbox checkbox-primary" />
                            <span className="label-text">Visa Application Form</span>
                        </label>
                        <label className="cursor-pointer label space-x-2">
                            <input type="checkbox" name="doc_photo" className="checkbox checkbox-primary" />
                            <span className="label-text">Recent Passport Size Photo</span>
                        </label>
                    </div>
                </div>

                {/* Description */}
                <div className="form-control">
                    <label className="label"><span className="label-text font-semibold">Description</span></label>
                    <textarea name="description" placeholder="Write details about the visa requirements..." className="textarea textarea-bordered h-24" required></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-full text-lg">Add Visa</button>
            </form>
        </div>
    );
}

export default AddVisa