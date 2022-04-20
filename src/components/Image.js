const Image = (props) => {
  const { src, alt, width, id, className, srcSet } = props;
  return (
    <img
      className={className}
      srcSet={srcSet}
      src={src}
      alt={alt}
      width={width}
      key={id}
    />
  );
};
export default Image;
