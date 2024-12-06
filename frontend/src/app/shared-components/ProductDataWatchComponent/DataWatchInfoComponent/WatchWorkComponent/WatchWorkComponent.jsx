import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { memo } from "react";
import styled from "styled-components";

function WatchWorkComponent({ works }) {
  return (
    <MainContainer>
      <HeaderContainer>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18 7.54839H17.3476L16.3753 8.06C16.2659 7.99961 16.152 7.94843 16.0293 7.91767L14.8062 7.61161V7.47255C15.3473 7.0949 15.6774 6.47102 15.6774 5.80645V5.29895C15.6774 4.17112 14.7937 3.22729 13.7075 3.1944C13.6524 3.19298 13.5981 3.19497 13.5435 3.19766L13.8606 2.45527L12.3233 0.918315L11.417 1.50817C11.0727 1.31425 10.7085 1.16327 10.3303 1.05738L10.1064 0H7.89385L7.67002 1.05766C7.2918 1.16356 6.92734 1.31453 6.58329 1.50846L5.67703 0.918599L4.14092 2.4547L4.45265 3.19766C4.44074 3.19709 4.4294 3.19497 4.4175 3.19468C3.86152 3.17852 3.33786 3.38138 2.94008 3.76753C2.54174 4.1534 2.32258 4.67124 2.32258 5.22581V5.80645C2.32258 6.47102 2.65245 7.09462 3.19355 7.47226V7.61161L2.39573 7.81107L0.949644 6.96774H0V12.9836L2.85616 13.9355H3.41242L3.48189 13.6922L4.35739 14.2177C4.37171 14.6938 4.75347 15.0768 5.22907 15.0935C5.24579 15.5671 5.62642 15.9478 6.10003 15.9645C6.11676 16.4381 6.49739 16.8187 6.971 16.8354C6.9883 17.3201 7.38522 17.7097 7.87387 17.7097C8.05532 17.7097 8.23322 17.6531 8.38278 17.5523L8.63993 17.7794C8.80111 17.9213 9.00865 18 9.22412 18H9.27785C9.76096 18 10.1541 17.6095 10.1602 17.1279C10.638 17.1218 11.025 16.7348 11.0311 16.2569C11.5093 16.2508 11.8966 15.8633 11.9021 15.3851C12.3846 15.3738 12.7742 14.9795 12.7742 14.4943C12.7742 14.4651 12.7728 14.4363 12.7698 14.4073L18 11.7924V7.54839ZM15.0968 5.29895V5.80645C15.0968 6.32175 14.8184 6.80316 14.3701 7.06272L14.225 7.14664L14.2261 8.06538L15.6766 8.42772L12.4839 10.1081V9.32605C12.4839 8.93578 12.3262 8.57841 12.0681 8.31431L13.0645 8.06538V7.14593L12.9196 7.06215C12.4717 6.80316 12.1935 6.32175 12.1935 5.80645V5.22581C12.1935 4.82987 12.35 4.4596 12.6346 4.18388C12.9188 3.9083 13.2959 3.75973 13.6901 3.77504C14.4657 3.79829 15.0968 4.482 15.0968 5.29895ZM9.43775 9.8799L8.1235 9.45987C7.52457 9.26792 6.87631 9.23929 6.2632 9.37509L6.09677 9.41195V9.32605C6.09677 8.92572 6.36824 8.57812 6.75638 8.48088L8.41935 8.06538V7.14593L8.27448 7.06215C7.82652 6.80316 7.54839 6.32175 7.54839 5.80645V5.22581C7.54839 4.82987 7.70489 4.4596 7.9894 4.18388C8.27363 3.9083 8.65312 3.75973 9.04494 3.77504C9.8205 3.79829 10.4516 4.482 10.4516 5.29895V5.80645C10.4516 6.32175 10.1732 6.80316 9.72496 7.06272L9.57979 7.14664L9.58093 8.06538L11.2436 8.48088C11.6318 8.57812 11.9032 8.92572 11.9032 9.32605V10.4139L11.8315 10.4516H11.6536L9.8687 9.94156C9.72807 9.90173 9.5832 9.88543 9.43775 9.8799ZM6.16184 4.3452C6.70705 3.28881 7.8044 2.6129 9 2.6129C10.1843 2.6129 11.2769 3.27974 11.8263 4.32181C11.688 4.59895 11.6129 4.90586 11.6129 5.22581V5.80645C11.6129 6.47102 11.9428 7.09462 12.4839 7.47226V7.61161L11.3226 7.90236L10.161 7.61161V7.47255C10.7021 7.0949 11.0323 6.47102 11.0323 5.80645V5.29895C11.0323 4.17112 10.1485 3.22729 9.06237 3.1944C8.50668 3.1781 7.98274 3.3811 7.58496 3.76725C7.1869 4.1534 6.96774 4.67124 6.96774 5.22581V5.80645C6.96774 6.47102 7.29762 7.09462 7.83871 7.47226V7.61161L6.67742 7.90236L5.51585 7.61161V7.47255C6.05694 7.0949 6.3871 6.47102 6.3871 5.80645V5.29895C6.3871 4.95731 6.30488 4.63297 6.16184 4.3452ZM4.82661 2.58937L5.75414 1.66184L6.57053 2.19315L6.72675 2.09733C7.11815 1.85747 7.54116 1.68183 7.98387 1.57594L8.16249 1.53312L8.36449 0.580645H9.63579L9.83723 1.53284L10.0158 1.57551C10.4586 1.68155 10.8816 1.85719 11.273 2.09704L11.4292 2.19287L12.2456 1.66156L13.172 2.58824L12.8427 3.35926C12.6185 3.45566 12.4107 3.59132 12.2298 3.76668C12.2179 3.7783 12.2077 3.79078 12.1961 3.80269C11.5121 2.71539 10.3029 2.03226 9 2.03226C7.68774 2.03226 6.47513 2.72177 5.79284 3.82012C5.61026 3.62903 5.39308 3.47423 5.15238 3.36607L4.82661 2.58937ZM3.77419 8.06538V7.14593L3.62932 7.06215C3.18136 6.80316 2.90323 6.32175 2.90323 5.80645V5.22581C2.90323 4.82987 3.05973 4.4596 3.34424 4.18388C3.62847 3.9083 4.00639 3.75973 4.39978 3.77504C5.17534 3.79829 5.80645 4.482 5.80645 5.29895V5.80645C5.80645 6.32175 5.52804 6.80316 5.07979 7.06272L4.93463 7.14664L4.93577 8.06538L5.93191 8.31431C5.67377 8.57841 5.51613 8.93578 5.51613 9.32605V9.54109L4.61057 9.74239L4.6341 9.66017L4.64516 9.12361L3.11402 8.23039L3.77419 8.06538ZM0.580645 7.54839H0.792291L2.88026 8.76624L1.82671 12.9803L0.580645 12.5648V7.54839ZM2.95029 13.3548L2.37886 13.1645L3.40236 9.07088L4.06452 9.45703V9.53996L2.97467 13.3548H2.95029ZM4.93548 14.1906C4.93548 14.105 4.97007 14.0211 5.03075 13.9604L5.54108 13.4501C5.60175 13.3894 5.68567 13.3548 5.7713 13.3548C5.95076 13.3548 6.09677 13.5008 6.09677 13.6803C6.09677 13.7659 6.06218 13.8499 6.00151 13.9105L5.49118 14.4209C5.43051 14.4815 5.34658 14.5161 5.26096 14.5161C5.0815 14.5161 4.93548 14.3701 4.93548 14.1906ZM5.80645 15.0616C5.80645 14.976 5.84104 14.8921 5.90171 14.8314L6.41205 14.3211C6.47272 14.2604 6.55664 14.2258 6.64226 14.2258C6.82173 14.2258 6.96774 14.3718 6.96774 14.5513C6.96774 14.6369 6.93315 14.7208 6.87248 14.7815L6.36215 15.2918C6.30147 15.3525 6.21755 15.3871 6.13193 15.3871C5.95246 15.3871 5.80645 15.2411 5.80645 15.0616ZM6.67742 15.9326C6.67742 15.847 6.71201 15.763 6.77268 15.7024L7.28301 15.192C7.34369 15.1314 7.42761 15.0968 7.51323 15.0968C7.6927 15.0968 7.83871 15.2428 7.83871 15.4223C7.83871 15.5079 7.80412 15.5918 7.74345 15.6525L7.23311 16.1628C7.17244 16.2235 7.08852 16.2581 7.0029 16.2581C6.82343 16.2581 6.67742 16.1121 6.67742 15.9326ZM7.87387 17.129C7.6944 17.129 7.54839 16.983 7.54839 16.8036C7.54839 16.7179 7.58298 16.634 7.64365 16.5733L8.15398 16.063C8.21465 16.0023 8.29858 15.9677 8.3842 15.9677C8.56367 15.9677 8.70968 16.1138 8.70968 16.2932C8.70968 16.3788 8.67509 16.4628 8.61442 16.5234L8.10408 17.0338C8.04341 17.0944 7.95949 17.129 7.87387 17.129ZM9.27785 17.4194H9.22412C9.15012 17.4194 9.07924 17.3924 9.0241 17.3435L8.80692 17.152L9.02495 16.934C9.10277 16.8561 9.16316 16.7636 9.20782 16.6642L9.47177 16.8839C9.54081 16.9415 9.58064 17.0263 9.58064 17.1166C9.58064 17.2835 9.44484 17.4194 9.27785 17.4194ZM11.8814 14.8065H11.8312C11.7583 14.8065 11.6872 14.7807 11.6315 14.7339L10.0571 13.4219L9.68512 13.8681L11.214 15.142C11.2827 15.1995 11.3226 15.2843 11.3226 15.3746C11.3226 15.5416 11.1868 15.6774 11.0198 15.6774H10.9564C10.886 15.6774 10.8171 15.6525 10.7628 15.6071L9.18585 14.2931L8.81387 14.7394L10.3427 16.0134C10.4118 16.0705 10.4516 16.1553 10.4516 16.2456C10.4516 16.4126 10.3158 16.5484 10.1488 16.5484C10.0374 16.5484 9.92881 16.5088 9.84332 16.4378L9.19534 15.8977C9.05259 15.606 8.75929 15.4025 8.41581 15.3904C8.39908 14.9167 8.01846 14.5361 7.54484 14.5194C7.52812 14.0458 7.14749 13.6651 6.67388 13.6484C6.65686 13.1637 6.25994 12.7742 5.7713 12.7742C5.53271 12.7742 5.29924 12.8709 5.13054 13.0396L4.62021 13.5499C4.58973 13.5804 4.5645 13.615 4.53884 13.6493L3.64704 13.1141L4.42884 10.3779L6.3888 9.94213C6.90296 9.82716 7.44504 9.85211 7.94645 10.0126L8.37413 10.1494L6.92422 10.8743C6.59293 11.0403 6.3871 11.3736 6.3871 11.7442V11.8016C6.3871 12.3379 6.82343 12.7742 7.35971 12.7742C7.53591 12.7742 7.70928 12.7263 7.85997 12.6354L8.94103 11.9871C9.1582 11.857 9.44966 11.8855 9.63721 12.0542L12.0902 14.2618C12.1558 14.3214 12.1935 14.4058 12.1935 14.4943C12.1935 14.6665 12.0536 14.8065 11.8814 14.8065ZM17.4194 11.4334L12.5282 13.8792C12.5124 13.8623 12.4958 13.8463 12.4783 13.8307L10.0258 11.6231C9.81086 11.4292 9.53301 11.3226 9.24354 11.3226C9.0319 11.3226 8.82408 11.3801 8.64206 11.4893L7.56058 12.1378C7.49991 12.1744 7.43058 12.1935 7.35971 12.1935C7.14338 12.1935 6.96774 12.0179 6.96774 11.8016V11.7442C6.96774 11.5946 7.05081 11.4605 7.18435 11.3937L8.80381 10.584C9.08094 10.4452 9.40997 10.4142 9.70865 10.5001L11.5331 11.0212L11.975 11.0323L17.4194 8.16674V11.4334Z'
            fill='black'
            fillOpacity='0.55'
          />
        </svg>
        Work
      </HeaderContainer>
      <TableContainer>
        <Table
          sx={{
            minWidth: 390,
            "&& td, && th": {
              border: "1px solid #ccc!important",
              padding: "5px",
            },
          }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Count</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {works.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align='center'>{row.name}</TableCell>
                <TableCell align='center'>{row.count}</TableCell>
                <TableCell align='center'>{row.price} $</TableCell>
                <TableCell align='center'>{row.amount} $</TableCell>
              </TableRow>
            ))}
            <TableRow sx={{ border: 0 }}>
              <TableCell
                align='center'
                colSpan={3}
              ></TableCell>
              <TableCell align='center'>
                Total: {Number(works.reduce((total, row) => total + row.amount, 0))} $
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </MainContainer>
  );
}

export default memo(WatchWorkComponent);

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: "10px",
}));

const MainContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));