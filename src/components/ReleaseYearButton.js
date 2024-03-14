export default function ReleaseYearButton(props) {
  const release_year = props.release_year;
  return (
    <>
      <div>
        <div className="release_year_button flex_center">{release_year}</div>
      </div>
    </>
  );
}
