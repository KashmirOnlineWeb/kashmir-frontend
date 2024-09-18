/* eslint-disable react/jsx-key */
import { NextPage } from 'next';
import React from 'react';
// @ts-ignore 
import ContentLoader from 'react-content-loader';
type loaderTpye = {
    prop?: any;
  };
type LoaderType = {
}
type PageWithLoadersType = {
    prop: number
}
const Loader: NextPage<LoaderType> = () => (
    <ContentLoader uniqueKey="my-random-value" style={{ display: "flex", margin: "0 auto", justifyContent: "center", alignItems: "center" }}
        speed={2}
        width={400}
        height={500}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >

        {/* Image Placeholder */}
        <rect x="10" y="50" rx="4" ry="4" width="320" height="200" />

        { /* Shimmering Rectangles */}
        <rect x="10" y="270" rx="3" ry="3" width="380" height="10" />
        <rect x="10" y="290" rx="3" ry="3" width="350" height="10" />
        <rect x="10" y="310" rx="3" ry="3" width="370" height="10" />

    </ContentLoader>
);

const PageWithLoaders: NextPage<loaderTpye> = ({ prop }) => (
        <div className="flex flex-row w-full ">
          {[...Array(prop)].map((data, index) => (
          <Loader  key={index}/>
          ))}
        </div>
  );
  
  export default PageWithLoaders;
