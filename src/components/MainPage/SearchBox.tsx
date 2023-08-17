import styled from 'styled-components';

const StyledSearchBox = styled.input`
  border: 1px solid #CCC;
  border-radius: 10px;
  display: block;
  height: 40px;
  margin: 0 auto 20px;
  padding: 0 10px;
  width: 250px;
`;

export default function SearchBox({ value, handleChange }: {
  value: string,
  handleChange: (v: string) => void
}) {
  return(
    <StyledSearchBox
      autoFocus
      className="SearchBox"
      onChange={e => handleChange(e.target.value)}
      placeholder="Search..."
      type="text"
      value={value}
    />
  );
}
