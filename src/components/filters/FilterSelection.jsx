import { motion } from "framer-motion";

const FilterSelection = ({ title, shapes, isColorSelection = false, selectedShapes, setSelectedShapes }) => {
  const handleButtonClick = (shape) => {
    if (shape === "All") {
      selectedShapes.length > 0 && selectedShapes.includes("All")
        ? setSelectedShapes([])
        : setSelectedShapes(shapes);
    } else {
      if (selectedShapes.includes("All")) {
        setSelectedShapes([shape]);
      } else {
        const newSelectedShapes = selectedShapes.includes(shape)
          ? selectedShapes.filter((s) => s !== shape)
          : [...selectedShapes, shape];

        // Check if all shapes except "All" are selected, then select "All"
        if (newSelectedShapes.length === shapes.length - 1) {
          setSelectedShapes(shapes);
        } else {
          setSelectedShapes(newSelectedShapes);
        }
      }
    }
  };

  return (
    <>
      {isColorSelection ? (
        <div className="flex flex-wrap gap-2 mt-3">
          {shapes.map((shape) => (
            <ShapeButton2
              key={shape}
              label={shape}
              isActive={selectedShapes.includes(shape)}
              onClick={() => handleButtonClick(shape)}
              isColorSelection={isColorSelection}
            />
          ))}
        </div>
      ) : (
        <div className="py-3">
          <h4 className="font-rossa text-[24px]">{title}</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-3">
            {shapes.map((shape) => (
              <ShapeButton2
                key={shape}
                label={shape}
                isActive={selectedShapes.includes(shape)}
                onClick={() => handleButtonClick(shape)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const ShapeButton2 = ({ label, isActive, onClick, isColorSelection }) => {
  return (
    <motion.button
      whileHover={{ scale: 0.97 }}
      className={`${
        isActive ? "bg-[#8FAAEE] text-white" : "bg-[#CFD9FF] text-[#001858]"
      }  py-2 ${isColorSelection ? "h-[30px] w-[30px] flex justify-center items-center":"rounded-3xl"} text-center hover:bg-[#8FAAEE] hover:text-white cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
};

export default FilterSelection;