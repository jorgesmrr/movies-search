import React from "react";
import Button from "../button/Button";
import ChevronLeftIcon from "../icon/ChevronLeftIcon";
import ChevronRightIcon from "../icon/ChevronRightIcon";
import * as S from "./Pagination.styles";

export interface PaginationProps {
  disabled?: boolean;
  page: number;
  totalPages: number;
  totalResults: number;
  onPreviousClick: () => void;
  onNextClick: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  disabled,
  page,
  totalPages,
  onPreviousClick,
  onNextClick,
}) => {
  return (
    totalPages > 1 && (
      <S.Container>
        <Button disabled={disabled || page === 1} onClick={onPreviousClick}>
          <ChevronLeftIcon />
          <S.ButtonText>Previous results</S.ButtonText>
        </Button>

        <S.PageInfo>
          Page {page} of {totalPages}
        </S.PageInfo>

        <Button disabled={disabled || page >= totalPages} onClick={onNextClick}>
          <S.ButtonText>More results</S.ButtonText>
          <ChevronRightIcon />
        </Button>
      </S.Container>
    )
  );
};

export default Pagination;
