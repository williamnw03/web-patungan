import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import StepSatu from "./components/stepSatu/StepSatu";
import StepDua from "./components/stepDua/StepDua";
import Result from "./components/result/Result";

import generateUniqueId from "generate-unique-id";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const generateUniqueId = require("generate-unique-id");

  const [stepClear, setStepClear] = useState({
    step1: false,
    step2: false,
    result: false,
  });

  const [filledStep, setFilledStep] = useState({
    step1: false,
    step2: false,
  });

  const [showFilledAlert, setShowFilledAlert] = useState(false);

  const changeStatusStep = (status, currentStep = null) => {
    if (currentStep === "step1") {
      if (
        groupName !== "" &&
        PICName !== "" &&
        members.length > 0 &&
        items.length > 0
      ) {
        setShowFilledAlert(false);
        setFilledStep((prev) => {
          return { ...prev, step1: true };
        });
      } else {
        setShowFilledAlert(true);
        setFilledStep((prev) => {
          return { ...prev, step1: false };
        });
        return false;
      }
    } else if (currentStep === "step2") {
      let countNotEmpty = 0;
      items.forEach((item) => {
        if (item.currentQuantity > 0) {
          countNotEmpty++;
        }
      });

      if (countNotEmpty > 0) {
        setShowFilledAlert(true);
        setFilledStep((prev) => {
          return { ...prev, step2: false };
        });
        return false;
      } else {
        setShowFilledAlert(false);
        setFilledStep((prev) => {
          return { ...prev, step2: true };
        });
      }
    }

    setStepClear((prev) => {
      if (status === "step1") {
        return { ...prev, step1: true };
      } else if (status === "step2") {
        return { ...prev, step2: true };
      } else if (status === "result") {
        return { ...prev, result: true };
      } else {
        return { step1: false, step2: false, result: false };
      }
    });
  };

  // Class MEMBER
  class Member {
    constructor(id, name, items, totalPayment) {
      this.id = id;
      this.name = name;
      this.items = items;
      this.totalPayment = totalPayment;
    }
  }

  // Class ITEM
  class Item {
    constructor(id, name, price, quantity) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.currentQuantity = quantity;
    }
  }

  // Class ADDITIONAL CHARGE
  class AddCharge {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  const [groupName, setGroupName] = useState("");
  const [PICName, setPICName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [members, setMembers] = useState([]);
  const [itemObj, setItemObj] = useState({
    id: "",
    name: "",
    price: 0,
    quantity: 0,
  });
  const [items, setItems] = useState([]);
  const [addChargeObj, setAddChargeObj] = useState({
    id: "",
    name: "",
    price: 0,
  });
  const [listAddCharge, setlistAddCharge] = useState([]);

  const startOver = () => {
    setGroupName("");
    setPICName("");
    setMemberName("");
    setMembers([]);
    setItemObj({
      id: "",
      name: "",
      price: 0,
      quantity: 0,
    });
    setItems([]);
    setAddChargeObj({
      id: "",
      name: "",
      price: 0,
    });
    setlistAddCharge([]);
    setStepClear({
      step1: false,
      step2: false,
      result: false,
    });
    setFilledStep({
      step1: false,
      step2: false,
    });
  };

  const groupNameChange = (e) => setGroupName(e.target.value);
  const PICNameChange = (e) => setPICName(e.target.value);
  const memberNameChange = (e) => setMemberName(e.target.value);

  const addMember = (e, memberName) => {
    if (memberName === "") {
      return false;
    }
    const newMember = new Member(generateUniqueId(), memberName, [], 0);
    setMembers((prev) => {
      const newMembers = [...prev];
      newMembers.push(newMember);
      return newMembers;
    });
  };

  const removeMember = (e, id) => {
    const newMembers = members.filter((e) => e.id !== id);
    const memberRemoved = members.find((e) => e.id === id);
    let newItems;

    memberRemoved.items.forEach((item) => {
      const itemID = item.id;
      const itemQuantity = item.currentQuantity;

      newItems = items.map((item) => {
        const newCurrentQuantity =
          parseInt(item.currentQuantity) + parseInt(itemQuantity);
        if (item.id === itemID) {
          return {
            ...item,
            currentQuantity: newCurrentQuantity,
          };
        } else {
          return item;
        }
      });
    });

    setItems((prev) => {
      return newItems;
    });

    setMembers((prev) => {
      return newMembers;
    });
  };

  const itemChange = (e, type) => {
    setItemObj((prev) => {
      if (type === "name") {
        return { ...prev, name: e.target.value };
      } else if (type === "price") {
        if (e.target.value[0] <= "0" && e.target.value.length === 2) {
          return { ...prev };
        }
        return { ...prev, price: e.target.value };
      } else {
        if (e.target.value[0] <= "0" && e.target.value.length === 2) {
          return { ...prev };
        }
        return { ...prev, quantity: e.target.value };
      }
    });
  };

  const addItem = (e, item) => {
    if (
      item.name !== "" &&
      item.price[0] !== "0" &&
      item.quantity[0] !== "0" &&
      item.price[0] !== undefined &&
      item.quantity[0] !== undefined
    ) {
      const newItem = new Item(
        generateUniqueId(),
        item.name,
        item.price,
        item.quantity
      );
      setItems((prev) => {
        const newItems = [...prev];
        newItems.push(newItem);
        return newItems;
      });
    }
  };

  const removeItem = (e, id) => {
    const newItems = items.filter((e) => e.id !== id);
    const itemRemoved = items.find((e) => e.id === id);

    const newMembers = members.map((member) => {
      return {
        ...member,
        items: member.items.filter((item) => {
          return item.id !== itemRemoved.id;
        }),
      };
    });

    setMembers(newMembers);

    setItems(newItems);
  };

  const changeAddCharge = (e, type) => {
    setAddChargeObj((prev) => {
      if (type === "name") {
        return { ...prev, name: e.target.value };
      } else {
        if (e.target.value[0] <= "0" && e.target.value.length === 2) {
          return { ...prev };
        }
        return { ...prev, price: e.target.value };
      }
    });
  };

  const addAddCharge = (e, addChargeEach) => {
    if (
      addChargeEach.name !== "" &&
      addChargeEach.price[0] !== "0" &&
      addChargeEach.price[0] !== undefined
    ) {
      const newAddCharge = new AddCharge(
        generateUniqueId(),
        addChargeEach.name,
        addChargeEach.price
      );
      setlistAddCharge((prev) => {
        const newListAddCharge = [...prev];
        newListAddCharge.push(newAddCharge);
        return newListAddCharge;
      });
    }
  };

  const removeAddCharge = (e, id) => {
    const newListAddCharge = listAddCharge.filter((e) => e.id !== id);
    setlistAddCharge(newListAddCharge);
  };

  const selectItem = (e, idMember, idItem, type = "inc") => {
    let removed = false;
    const newMembers = members.map((member) => {
      if (member.id === idMember) {
        const currentItem = member.items.find((item) => item.id === idItem);
        const editMember = { ...member };

        // Remove badge selected item
        if (currentItem) {
          if (currentItem.currentQuantity <= 0) {
            const removedItem = member.items.filter(
              (item) => item.id !== idItem
            );
            removed = true;
            member.items = removedItem;
            return member;
          }
        }

        if (currentItem) {
          const newItems = member.items.map((item) => {
            if (item.id === idItem) {
              if (type === "inc") {
                const currentRealItem = items.find(
                  (item) => item.id === idItem
                );
                if (currentRealItem.currentQuantity > 0) {
                  item.currentQuantity = item.currentQuantity + 1;
                }
              } else {
                if (item.currentQuantity > 0) {
                  item.currentQuantity = item.currentQuantity - 1;
                } else if (item.currentQuantity <= 0) {
                }
              }
              return item;
            } else {
              return item;
            }
          });
          member.items = newItems;
          return member;
        } else {
          const selectedItem = {
            ...items.find((item) => item.id === idItem),
          };
          selectedItem.currentQuantity = 1;
          editMember.items.push(selectedItem);
          return editMember;
        }
      } else {
        return member;
      }
    });

    setMembers((prev) => {
      return newMembers;
    });

    if (!removed) {
      setItems((prev) => {
        return prev.map((item) => {
          if (item.id === idItem) {
            if (type === "inc") {
              if (item.currentQuantity > 0) {
                return { ...item, currentQuantity: item.currentQuantity - 1 };
              } else {
                return item;
              }
            } else {
              return { ...item, currentQuantity: item.currentQuantity + 1 };
            }
          } else {
            return item;
          }
        });
      });
    }
  };

  const resetStepDua = () => {
    setMembers((prev) => {
      return prev.map((member) => ({ ...member, items: [] }));
    });
    setItems((prev) => {
      return prev.map((item) => ({ ...item, currentQuantity: item.quantity }));
    });
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Home stepClear={stepClear} changeStatusStep={changeStatusStep} />
          }
        ></Route>
        <Route
          path="/step-satu"
          element={
            <StepSatu
              groupName={groupName}
              groupNameChange={groupNameChange}
              PICName={PICName}
              PICNameChange={PICNameChange}
              memberName={memberName}
              memberNameChange={memberNameChange}
              members={members}
              addMember={addMember}
              removeMember={removeMember}
              itemObj={itemObj}
              itemChange={itemChange}
              addItem={addItem}
              removeItem={removeItem}
              items={items}
              addChargeObj={addChargeObj}
              changeAddCharge={changeAddCharge}
              addAddCharge={addAddCharge}
              listAddCharge={listAddCharge}
              removeAddCharge={removeAddCharge}
              stepClear={stepClear}
              changeStatusStep={changeStatusStep}
              showFilledAlert={showFilledAlert}
            />
          }
        ></Route>
        <Route
          path="/step-dua"
          element={
            <StepDua
              groupName={groupName}
              members={members}
              items={items}
              selectItem={selectItem}
              stepClear={stepClear}
              changeStatusStep={changeStatusStep}
              filledStep={filledStep}
              showFilledAlert={showFilledAlert}
              resetStepDua={resetStepDua}
            />
          }
        ></Route>
        <Route
          path="/result"
          element={
            <Result
              members={members}
              PICName={PICName}
              listAddCharge={listAddCharge}
              stepClear={stepClear}
              changeStatusStep={changeStatusStep}
              filledStep={filledStep}
              startOver={startOver}
            />
          }
        ></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
