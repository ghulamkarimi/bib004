import Persons from "../components/Persons";
import SearchButton from "../components/SearchButton";

const PageHome = () => {
  return (
    <div>
      <span className="flex flex-col items-center justify-center mb-4 md:flex-row gap-6">
        <h1 className="py-6 text-center text-3xl font-bold ">
          Personalverwaltung
        </h1>
        <SearchButton />
      </span>
      <p className="text-center font-bold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, possimus
        laborum illum blanditiis, sapiente odit veritatis eum libero minus
        doloribus repellendus. Sed quod ullam vitae tempore labore fuga ipsam
        dolorum tempora odio, libero, provident voluptate. Mollitia sequi
        pariatur corporis voluptates quibusdam eligendi quo? Voluptatum optio
        autem amet voluptates. Mollitia, est?
      </p>
      <Persons />
      <p className="text-center py-6 px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed
        fuga earum rem fugit eos aliquid omnis soluta? Laboriosam earum autem
        veritatis beatae facere distinctio reprehenderit commodi maiores
        doloremque numquam perferendis rerum ducimus recusandae a animi aut
        adipisci ut accusantium sapiente deleniti sit, assumenda at fuga? At
        iure deleniti ex, fuga suscipit dolorum quo architecto molestiae est
        recusandae ipsa qui.
      </p>
    </div>
  );
};

export default PageHome;
