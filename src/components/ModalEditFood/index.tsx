import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FoodApi } from "../../pages/Dashboard";

interface ModalEditFoodProps {
  editingFood: FoodApi
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (param: FoodApi) => void;
}

const ModalEditFood = ({
  editingFood,
  isOpen,
  setIsOpen,
  handleUpdateFood,
}: ModalEditFoodProps) => {
  const formRef = useRef();

  const handleSubmit = async (data: FoodApi) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        ref={formRef.current}
        onSubmit={handleSubmit}
        initialData={editingFood}
      >
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
