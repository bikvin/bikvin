import PortfolioEditList from "@/components/admin/portfolio/edit/portfolioEditList";
import Header from "@/components/admin/topMenu/topMenu";
import Link from "next/link";

export default function PortfolioItemsPage() {
  return (
    <>
      <Header page="portfolio" />
      <div className="max-w-screen-lg mx-auto ">
        <div className="w-[90%] mx-auto">
          <div className=" mt-10 flex justify-end">
            <Link
              className="link-button link-button-green"
              href="/admin/portfolio/new"
            >
              Новый пункт
            </Link>
          </div>
          <PortfolioEditList />
        </div>
      </div>
    </>
  );
}
