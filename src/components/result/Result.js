import "./result.css";

function Result() {
  return (
    <div className="result">
      <main>
        <div
          className="container shadow p-3 mb-4 bg-body rounded mt-5"
          style={{ backgroundColor: "white" }}
        >
          <div className="text-center">
            <h5 className="fw-bold">Pembayar Tagihan</h5>
            <input type="text" name="" id="" />
          </div>

          <div className="mt-5 container text-center">
            <table className="table">
              <thead>
                <tr>
                  <th className="fw-bold">Nama Anggota</th>
                  <th className="fw-bold">Total yang Harus Dibayar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" name="" id="" />
                  </td>
                  <td>
                    <input type="text" name="" id="" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="" id="" />
                  </td>
                  <td>
                    <input type="text" name="" id="" />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="text-end">
              <button
                className="p-2"
                style={{ backgroundColor: "white", borderRadius: "10px" }}
              >
                <img
                  src="assets/link.png"
                  alt=""
                  height="auto"
                  width="30"
                  style={{ border: "none" }}
                />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Result;
