import { Card } from "@/components/Card";
import { Pager } from "@/components/Pager";
import { getRamdomPhotos } from "@/lib/pexels";
import { getPageParams } from "@/utils/utils";
import {} from "next";

export interface PageSearchParams {
  [key: string]: string | undefined;
}

type Props = {
  params: {};
  searchParams: PageSearchParams;
};

// export const revalidate = 5000;

export default async function Photos(props: Props) {
  const { params, searchParams } = props;

  const query = searchParams.search || "landscape";
  const { page } = getPageParams(searchParams.page);

  const response = await getRamdomPhotos({ query, page });
  return (
    <main className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {response.photos.map((photo) => (
          <Card photo={photo} key={photo.id} />
        ))}
      </div>

      <div className="my-4 w-full flex justify-end">
        <Pager
          page={response.page}
          total={response.total_results}
          searchParams={searchParams}
        />
      </div>
    </main>
  );
}
