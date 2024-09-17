const useBackgroundImage = (address: string, size?: string) => {
  const bgstyle = {
    backgroundImage: `url(${address})`,
    backgroundSize: `${size}`,
    width: 'auto',
    height: 'auto',
  }
  return {
    bgstyle
  }
}
export default useBackgroundImage;