import "./result.css";
import { NumericFormat } from "react-number-format";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Result(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.stepClear.result) {
      navigate("/");
    }

    if (!props.filledStep.step2) {
      navigate("/step-dua");
    }
  }, [props.stepClear]);

  const totalMembers = props.members.length;

  const eachMemberPricing = props.members.map((member) => {
    console.log(member);
    const newMemberPricing = {};
    let totalPricing = 0;

    member.items.forEach((item) => {
      const priceEachItem = parseFloat(item.price) / parseInt(item.quantity);
      totalPricing += priceEachItem * parseFloat(item.currentQuantity);
    });

    props.listAddCharge.forEach((addCharge) => {
      totalPricing += parseFloat(addCharge.price) / parseFloat(totalMembers);
    });

    newMemberPricing.id = member.id;
    newMemberPricing.name = member.name;

    newMemberPricing.totalPricing = Math.ceil(totalPricing);

    return newMemberPricing;
  });

  let totalAllPricing = 0;
  eachMemberPricing.forEach((e) => {
    totalAllPricing += e.totalPricing;
  });

  return (
    <div className="resultc">
      <main>
        <div
          className="container shadow p-3 mb-4 bg-body rounded mt-5"
          style={{ backgroundColor: "white" }}
        >
          <div className="text-center">
            <h5 className="fw-bold">Pembayar Tagihan</h5>
            <h6 className="fw-bold">{props.PICName}</h6>
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
                {eachMemberPricing.map((member) => {
                  return (
                    <tr key={member.id}>
                      <td>
                        <p>{member.name}</p>
                      </td>
                      <td>
                        <p>
                          <NumericFormat
                            displayType="text"
                            decimalScale={3}
                            thousandSeparator="."
                            decimalSeparator=","
                            prefix="Rp. "
                            value={member.totalPricing}
                          ></NumericFormat>
                        </p>
                      </td>
                    </tr>
                  );
                })}
                <tr className="table-dark">
                  <td>
                    <p>Total</p>
                  </td>
                  <td>
                    <p>
                      <NumericFormat
                        displayType="text"
                        decimalScale={3}
                        thousandSeparator="."
                        decimalSeparator=","
                        prefix="Rp. "
                        value={totalAllPricing}
                      ></NumericFormat>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="text-end d-flex justify-content-between align-items-center">
              <p className="mb-0 text-danger">
                *Harap <strong>di-screenshot</strong> atau{" "}
                <strong>dicatat</strong> agar tidak lupa!
              </p>
              <Link
                to="/result"
                className="btn text-light btn-lg"
                style={{ backgroundColor: "#17223a" }}
                onClick={props.startOver}
              >
                Start Over
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Result;
