"use client";

import React from 'react'
import Image from 'next/image';
import Image1 from "../../../public/img/blog/blog1.webp";
import Image2 from "../../../public/img/blog/blog2.webp";
import Image3 from "../../../public/img/blog/blog3.webp";


const BlogPostSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips to Create an Impressive Matrimony Profile",
      description:
        "Your profile is the first step to making a great impression. Learn how to showcase your personality, values, and aspirations to attract the right match",
      image: Image1,
    },
    {
      id: 2,
      title: "Modern Love Meets Tradition: Balancing Values in Relationships",
      description:
        "Discover how modern Indian couples are blending traditional values with contemporary lifestyles to build meaningful and lasting relationships",
      image: Image2,
    },
    {
      id: 3,
      title: "From Match to Marriage: Real Stories of Successful Couples",
      description:
        "Get inspired by real-life stories of couples who found their perfect partner through our platform and built a life of love and happiness together",
      image: Image3,
    },
  ];

  return (
    <section className="py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-2xl md:text-3xl font-bold py-1">Insights and Inspiration</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-[1.1rem]">
          Dive into our curated collection of articles, tips, and stories that celebrate love, relationships, and the beautiful journey of finding a life partner.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogPosts.map((post, idx) => (
            <div data-aos="zoom-in" data-aos-delay={idx * 150} key={post.id} className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200 pt-4 pb-2 px-3">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover rounded-xl"
              />
              <div className="py-4 px-2 text-start">
                <h3 className="text-[1.2rem] font-semibold">{post.title}</h3>
                <p className="text-gray-600 mt-3">{post.description}</p>
                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg w-full font-semibold hover:bg-red-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPostSection