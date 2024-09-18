import Footer from "@/components/Footer"
import FAQsSection from "@/components/faq"
import Header from "@/components/header"

const Faqs = () => {
    return (
        <>
            <div className="w-full overflow-hidden bg-default-white text-left font-others-capitalised text-sm text-default-white">
                <Header />
                <div className="container mx-auto py-20 max-md:px-5">
                <FAQsSection noPadding="pb-0" faqTitle="Whats included" message="If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked." />
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Faqs