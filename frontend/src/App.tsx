import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3" />
        <div className="col-sm 6" />
        <h5 className="text-center text-secundary">Taxas de sucesso (%)</h5>
        <BarChart />
      </div>
      <div className="col-sm 6" />
      <h5 className="text-center text-secundary">Todas Vendas</h5>
      <DonutChart />
      </div>
      </div>

      <div className="py-3"> 
        <h2 className="text-primary">Todas vendas</h2>
      </div>

      <DataTable />
      <Footer />
    </>
      );
}
export default App;
