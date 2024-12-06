import { Box } from "@mui/material";
import ButtonProbComponent from "app/shared-components/ButtonProbComponent";
import { useFieldArray, useFormContext } from "react-hook-form";
import styled, { css } from "styled-components";

function ProductGoldProb({ index }) {
  const { control, trigger, setValue   } = useFormContext();
  
  const { fields,} = useFieldArray({
    control,
    name: "golds",
  });

  const gold = fields[index] || {};

  const handleProbChange = (prob, color) => {
    const updatedGold = { ...gold, prob, color };
    setValue(`golds.${index}`, updatedGold);
    gold.prob = prob
    gold.color = color
    trigger();
  };

  return (
    <AddNewContainer>
      <ButtonProbComponent
        label='585'
        callback={() => handleProbChange(585, 1)}
        prob={585}
        color={1}
        customStyles={GoldProbStyle}
        isActive={gold.color === 1 && gold.prob === 585}
      />
      <ButtonProbComponent
        label='585'
        callback={() => handleProbChange(585, 2)}
        prob={585}
        color={2}
        customStyles={GoldProbStyle}
        isActive={gold.color === 2 && gold.prob === 585}
      />
      <ButtonProbComponent
        label='585'
        callback={() => handleProbChange(585, 3)}
        prob={585}
        color={3}
        customStyles={GoldProbStyle}
        isActive={gold.color === 3 && gold.prob === 585}
      />
      <ButtonProbComponent
        label='750'
        callback={() => handleProbChange(750, 1)}
        prob={750}
        color={1}
        customStyles={GoldProbStyle}
        isActive={gold.color === 1 && gold.prob === 750}
      />
      <ButtonProbComponent
        label='750'
        callback={() => handleProbChange(750, 2)}
        prob={750}
        color={2}
        customStyles={GoldProbStyle}
        isActive={gold.color === 2 && gold.prob === 750}
      />
      <ButtonProbComponent
        label='750'
        callback={() => handleProbChange(750, 3)}
        prob={750}
        color={3}
        customStyles={GoldProbStyle}
        isActive={gold.color === 3 && gold.prob === 750}
      />
    </AddNewContainer>
  );
}

export default ProductGoldProb;

const AddNewContainer = styled(Box)(() => ({
  minWidth: "50%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const GoldProbStyle = ({ theme }) => css`
  min-width: 50px !important;
  min-height: 24px !important;
  padding: 0px !important;
`;
