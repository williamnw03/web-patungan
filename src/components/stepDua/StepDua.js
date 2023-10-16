import { Link } from "react-router-dom";

function StepDua(props) {
  return (
    <div className="stepDua">
      <main>
        <article>
          <div className="container mt-3">
            <h1 className="fw-bold">{props.groupName}</h1>
          </div>

          <section className="mb-5">
            <div className="container mt-5 shadow p-3 mb-4 bg-body-tertiary rounded">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <p>Nama Anggota</p>
                    </th>
                    <th scope="col">
                      <p>Pilih Barang</p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {props.members.map((member) => {
                    return (
                      <tr key={member.id}>
                        <td>
                          <div className="mb-3">
                            <div className="card">
                              <div className="card-body">{member.name}</div>
                            </div>
                            {member.items.map((item) => {
                              return (
                                <div
                                  key={item.id}
                                  className="d-flex justify-content-between align-items-center gap-1 badge text-bg-secondary mt-2"
                                  style={{ width: "max-content" }}
                                  data-bs-theme="dark"
                                >
                                  <span>
                                    {item.quantity} - {item.name}
                                  </span>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={(e) =>
                                      props.selectItem(
                                        e,
                                        member.id,
                                        item.id,
                                        "desc"
                                      )
                                    }
                                  ></button>
                                </div>
                              );
                            })}
                          </div>
                        </td>
                        <td>
                          <div className="btn-group w-100">
                            <button
                              className="btn btn-light dropdown-toggle w-100 text-start"
                              type="button"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              aria-expanded="false"
                            >
                              Choose Items
                            </button>
                            <ul className="dropdown-menu">
                              {props.items.map((item) => {
                                return (
                                  <li
                                    key={item.id}
                                    onClick={(e) =>
                                      props.selectItem(e, member.id, item.id)
                                    }
                                  >
                                    <button className="dropdown-item" href="#">
                                      {item.currentQuantity} - {item.name}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="text-end">
                <button type="button" className="btn btn-danger btn-lg mx-3">
                  Reset
                </button>
                <Link
                  to="/result"
                  className="btn text-light btn-lg"
                  style={{ backgroundColor: "#17223a" }}
                >
                  Hitung
                </Link>
              </div>
            </div>
          </section>

          <br />
          <div className="text-center mt-5 ms-5">
            <img src="assets/slogan.png" alt="" />
          </div>
        </article>

        <img src="assets/pesawat.png" alt="" />
      </main>
    </div>
  );
}

export default StepDua;
