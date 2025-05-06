"use client";

import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

type SearchFormData = {
  lookingFor: string;
  ageRange: string;
  religion: string;
  location: string;
  motherTongue: string;
};

const FindPartner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>();

  const onSubmit = (data: SearchFormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <section className="bg-[#c90413] text-white py-8 px-4 border-2 border-[#ffc7c7]">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
        Find the perfect partner for you
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto bg-[#e0373e] p-6 rounded-2xl shadow-lg border"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Looking For */}
          <div>
            <label className="block text-lg font-medium pb-1">I am looking for</label>
            <select
              {...register("lookingFor", { required: "Please select an option" })}
              className="w-full p-3 rounded-lg bg-white text-[#262626]"
            >
              <option value="">Select</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
            </select>
            {errors.lookingFor && (
              <p className="text-yellow-300 text-xs mt-1">{errors.lookingFor.message}</p>
            )}
          </div>

          {/* Age Range */}
          <div>
            <label className="block text-lg font-medium pb-1">Age range</label>
            <select
              {...register("ageRange", { required: "Please select an age range" })}
              className="w-full p-3 rounded-lg bg-white text-[#262626]"
            >
              <option value="">Select</option>
              <option value="20-30">20 to 30</option>
              <option value="30-40">30 to 40</option>
            </select>
            {errors.ageRange && (
              <p className="text-yellow-300 text-xs mt-1">{errors.ageRange.message}</p>
            )}
          </div>

          {/* Religion */}
          <div>
            <label className="block text-lg font-medium pb-1">Religion</label>
            <select
              {...register("religion", { required: "Please select a religion" })}
              className="w-full p-3 rounded-lg bg-white text-[#262626]"
            >
              <option value="">Select</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
            </select>
            {errors.religion && (
              <p className="text-yellow-300 text-xs mt-1">{errors.religion.message}</p>
            )}
          </div>

          {/* Preferred Location */}
          <div>
            <label className="block text-lg font-medium pb-1">Preferred Location</label>
            <select
              {...register("location", { required: "Please select a location" })}
              className="w-full p-3 rounded-lg bg-white text-[#262626]"
            >
              <option value="">Select</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
            {errors.location && (
              <p className="text-yellow-300 text-xs mt-1">{errors.location.message}</p>
            )}
          </div>

          {/* Mother Tongue */}
          <div>
            <label className="block text-lg font-medium pb-1">Mother’s tongue</label>
            <select
              {...register("motherTongue", { required: "Please select a language" })}
              className="w-full p-3 rounded-lg bg-white text-[#262626]"
            >
              <option value="">Select</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">Tamil</option>
            </select>
            {errors.motherTongue && (
              <p className="text-yellow-300 text-xs mt-1">{errors.motherTongue.message}</p>
            )}
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-yellow-400 text-[#262626] font-medium px-6 py-3 rounded-md hover:bg-[#f7b32b] transition w-full flex justify-center items-center gap-2"
          >
            <span>Search</span>

            <span><FiSearch /></span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default FindPartner;
