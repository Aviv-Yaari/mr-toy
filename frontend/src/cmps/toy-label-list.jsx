import Chip from '@material-ui/core/Chip';

export const ToyLabelList = props => {
  const { labels } = props;
  if (!labels) return <></>;
  return (
    <div
      className="toy-label-list flex"
      style={{ gap: '10px', flexWrap: 'wrap', padding: '8px 16px' }}>
      {labels.map((label, idx) => (
        <Chip key={idx} label={label} />
      ))}
    </div>
  );
};
