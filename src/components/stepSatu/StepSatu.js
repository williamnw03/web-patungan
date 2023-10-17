import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function StepSatu(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.stepClear.step1) {
      navigate("/");
    }
  }, []);

  return (
    <div className="stepSatu">
      {props.showFilledAlert && (
        <div
          class="alert alert-danger alert-dismissible fade show fixed-top mt-5 w-50 mx-auto"
          role="alert"
        >
          <strong>Warning!</strong> You must filled all input{" "}
          <strong> ('Biaya Tambahan is Optional')</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <main>
        <h1 style={{ textAlign: "center" }} className="mb-5 mt-5 fw-bold">
          Nama Grup dan Anggota
        </h1>
        <section>
          <div className="mb-5 p-5">
            <div className="row">
              <div className="col">
                <img
                  src="assets/8.png"
                  alt="gambar2"
                  width="mx-auto"
                  height="400"
                />
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="ngrup">Masukan Nama Grup</label> <br />
                  <input
                    value={props.groupName}
                    type="text"
                    className="form-control border-dark-subtle border-2"
                    id="ngrup"
                    required
                    onChange={props.groupNameChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="total_tagihan ">Pembayar Tagihan</label>
                  <br />
                  <input
                    value={props.PICName}
                    type="text"
                    className="form-control border border-dark-subtle border-2"
                    id="total_tagihan"
                    required
                    onChange={props.PICNameChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="n_anggota">Anggota Grup</label> <br />
                  <div className="d-flex gap-3">
                    <input
                      value={props.memberName}
                      type="text"
                      className="form-control border border-dark-subtle border-2"
                      id="n_anggota"
                      required
                      onChange={props.memberNameChange}
                    />
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={(e) => props.addMember(e, props.memberName)}
                    >
                      Tambah
                    </button>
                  </div>
                  <div className="d-flex flex-wrap gap-1 mt-3">
                    {props.members.map((e) => {
                      return (
                        <div
                          className="d-flex align-items-center gap-1 badge text-bg-secondary"
                          data-bs-theme="dark"
                          key={e.id}
                        >
                          <span>{e.name}</span>
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={(ev) => props.removeMember(ev, e.id)}
                          ></button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="col ms-5">
                <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                  <br />
                  <br />
                  <p>Dalam step awal ini, kamu bisa:</p>
                  <p>1. Masukkan nama grup atau nama circle kamu juga boleh.</p>
                  <p>2. Kemudian tulis siapa pembayar tagihannya.</p>
                  <p>
                    3. Selanjutnya, kamu juga bisa menambahkan anggota grup yang
                    turut ikut split bill.
                  </p>
                  <br />
                  <h4>
                    Tips!
                    <img
                      src="assets/icon_idea.png"
                      alt="icon_idea"
                      height="25px"
                    />
                  </h4>
                  <p>
                    Pastikan semuanya benar ya... Kalau ada yang salah, kamu
                    bisa edit kok.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#17223a" }}>
          <div className="mt-5 p-5">
            <h1 className="text-center mb-5 text-white">
              Nama Barang, Harga, dan Kuantitas
            </h1>
          </div>

          <div className="container">
            <div className="row ms-0">
              <div className="col">
                <div className="text-start">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <label htmlFor="nbarang">Nama Barang</label> <br />
                          <input
                            value={props.itemObj.name}
                            type="text"
                            className="form-control border border-dark-subtle border-2"
                            id="nbarang"
                            required
                            onChange={(e) => props.itemChange(e, "name")}
                          />
                        </td>
                        <td>
                          <label htmlFor="harga">Harga</label>
                          <input
                            value={props.itemObj.price}
                            type="number"
                            className="form-control border border-dark-subtle border-2"
                            id="total_tagihan"
                            required
                            onChange={(e) => props.itemChange(e, "price")}
                          />
                        </td>
                        <td>
                          <label htmlFor="kuantitas">Kuantitas</label> <br />
                          <input
                            value={props.itemObj.quantity}
                            type="number"
                            className="form-control border border-dark-subtle border-2 w-75"
                            id="kuantitas"
                            required
                            onChange={(e) => props.itemChange(e, "quantity")}
                          />
                        </td>

                        <td>
                          <button
                            type="button"
                            className="btn btn-secondary mt-4"
                            onClick={(e) => props.addItem(e, props.itemObj)}
                          >
                            Tambah
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {props.items.map((e) => {
                    return (
                      <div
                        className="card mt-2 p-3 flex-row align-items-center"
                        key={e.id}
                      >
                        <div className="card-body p-0">
                          {e.name} | Rp.{e.price} | Q {e.quantity}
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          aria-label="Close"
                          onClick={(ev) => props.removeItem(ev, e.id)}
                        ></button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="col w-25">
                <div className="text-start shadow p-3 mb-4 bg-body-tertiary rounded">
                  <p>Selanjutnya, kamu bisa:</p>
                  <p>
                    1. Masukkan nama barang, harga, kuantitas, dan siapa yang
                    harus bayar barang tersebut.
                  </p>
                  <p>
                    2. Kemudian kamu juga bisa tambahin item-item lain yang
                    harus dibayar oleh temen kamu.
                  </p>
                  <p>
                    3. Kalo salah, tenang aja kamu bisa pencet tombol “X” untuk
                    eliminasi barang.
                  </p>
                  <br />
                  <h4>
                    Tips! <img src="assets/icon_idea.png" alt="icon_idea" />
                  </h4>
                  <p>Pastikan semuanya benar ya...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row-reverse mb-0 me-5">
            <img src="assets/7.png" alt="gambar3" height="500px" />
          </div>
        </section>
      </main>

      <section className="container shadow p-3 mb-4 mt-5 bg-body-tertiary rounded">
        <h1 className="text-center mb-2 p-5 fw-bold">Biaya Tambahan</h1>

        <div className="container p-1 text-start">
          <div className="row">
            <div className="col">
              <div className="ms-5">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="nbarang">Nama Biaya</label> <br />
                        <input
                          value={props.addChargeObj.name}
                          type="text"
                          className="form-control border border-black"
                          id="nbarang"
                          required
                          onChange={(e) => props.changeAddCharge(e, "name")}
                        />
                      </td>
                      <td>
                        <label htmlFor="total_tagihan">Harga Biaya</label>
                        <input
                          value={props.addChargeObj.price}
                          type="number"
                          className="form-control border border-black w-75"
                          id="total_tagihan"
                          required
                          onChange={(e) => props.changeAddCharge(e, "price")}
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-secondary mt-4"
                          onClick={(e) =>
                            props.addAddCharge(e, props.addChargeObj)
                          }
                        >
                          Tambah
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {props.listAddCharge.map((e) => {
                  return (
                    <div
                      className="card mt-2 p-3 flex-row align-items-center"
                      key={e.id}
                    >
                      <div className="card-body p-0">
                        {e.name} | Rp.{e.price}
                      </div>
                      <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={(ev) => props.removeAddCharge(ev, e.id)}
                      ></button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col">
              <div className="ms-5">
                <p>Step terakhir ini sifatnya opsional ya!</p>
                <p>
                  Kamu bisa cantumkan biaya apa saja yang termasuk di dalam
                  tagihan kamu, seperti biaya pajak, service cost, parkir, dan
                  lain-lain.
                </p>
                <h4>
                  Tips! <img src="assets/icon_idea.png" alt="icon_idea" />
                </h4>
                <p>Pastikan semuanya benar ya...</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5 mb-5">
            <Link
              to="/step-dua"
              className="btn btn btn-lg"
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "#17223a",
              }}
              onClick={() => props.changeStatusStep("step2", "step1")}
            >
              Submit
            </Link>
          </div>
        </div>
      </section>

      <div>
        <img src="assets/pesawat.png" alt="pesawat kertas" />
      </div>
    </div>
  );
}

export default StepSatu;
