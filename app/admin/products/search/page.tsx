import Heading from "@/components/ui/Heading";

const SearchPage = async ({ searchParams } : { searchParams: { search: string } } ) => {
console.log(searchParams.search)

  return (
    <>
      <Heading>Resultados de Búsqueda</Heading>
    </>
  );
};
export default SearchPage;
