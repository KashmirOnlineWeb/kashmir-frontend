import type { NextPage } from 'next';
import ListingForm from './listing-form';
import { Pagination } from './pagination';
import Property1pack2 from './property1pack2';
import SideFilters from './side-filters';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PageWithLoaders from './loader';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, Key } from 'react';
import { getAllCategoryPackage } from '@/services/package';
import { getCategoryPackage } from '@/redux/slices';
import { getAllPackage } from '@/services/package';

type ListingCategory = {
  imageUrl?: string;
  name?: string;
  totalDays?: string;
  place?: string;
  amenities1?: string;
  amenities2?: string;
  amenities3?: string;
  description?: string;
  taxes?: string;
  amenities4?: string;
  price?: string;
  star?: string;
  isPackage?: boolean;
  isHotel?: boolean;
  isAllListing?: boolean;
};

const ListingCategories: NextPage<ListingCategory> = ({ isPackage, isHotel, isAllListing, imageUrl, name, totalDays, place, amenities1, amenities2, amenities3, amenities4, description, taxes, price, star }) => {
  const categorypackageData = useSelector((state: any) => state.categorypackage.data)
  const [showLoader, setShowLoader] = useState(true)
  const propLoaderValue = 1
  const router = useRouter();
  // Check if router.asPath is defined before splitting
  const currentURL = router.asPath || ''; // Initialize it as an empty string if undefined
  const segments = currentURL.split('/'); // Split the URL by '/'
  const lastSegment = segments[segments.length - 1];
  const dispatch = useDispatch()
  useEffect(() => {
    const FetchData = async () => {
      const data = await getAllPackage()
      const uniqueCategory = await getAllCategoryPackage(lastSegment)
      dispatch(getCategoryPackage(uniqueCategory?.packages))
      setShowLoader(false)
    }
    FetchData()
  }, [lastSegment, dispatch])
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex gap-14">
          <div className="w-1/5">
            <SideFilters />
          </div>
          <div className="w-4/5">
            <div className="flex flex-row items-center justify-start py-[40px] text-black">
              <div className="relative font-medium">Showing 40 results</div>
            </div>
            <div className="flex flex-row flex-wrap items-start pb-[25px] gap-4">
              {showLoader ?
                <PageWithLoaders prop={propLoaderValue} />
                :
                categorypackageData && categorypackageData.map((data: {
                  id: any;
                  content: string | undefined;
                  star: string | undefined;
                  destination: string | undefined; imageURL: string | undefined; package_name: string | undefined; duration: { nights: any; days: any; }; price: any;
                }, index: Key | null | undefined) => (
                  <div key={index}>
                    <Link href={`/package/${data?.id}`} className="no-underline">
                      <Property1pack2
                        frame95={data.imageURL}
                        property1pack2Position="unset"
                        property1pack2ZIndex="0"
                        packageName={data.package_name}
                        star={data.star}
                        totalDays={`${data.duration.nights}N / ${data.duration.days}D`}
                        location={data.destination}
                        amenities2="Hotel"
                        amenities3="Transport"
                        amenities1="Sightseeing"
                        pacakgeText={data.content}
                        price={`From ₹ ${data.price} pp`}
                        isPackage={true}
                        isHotel={isHotel}
                        isAllListing={true}
                      />
                    </Link>
                  </div>
                ))}
              <ListingForm />
              <div className="mt-[40px] border border-solid border-smokegrey" />
              <div className="pb-[50px]">
                <Pagination pageCount={0} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCategories;
