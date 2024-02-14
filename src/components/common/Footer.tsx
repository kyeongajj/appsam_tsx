import styled from '@emotion/styled';

const CustomFooter = styled('footer')({
  padding: '0px 10px',
  backgroundColor: 'pink',
  color: '#fff',
  height: '100px',
});

const Footer = () => {
  return <CustomFooter>이거는 Footer에요</CustomFooter>;
};

export default Footer;
