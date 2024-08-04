const VisibilityType = {
  PRIVATE: 0,
  PUBLIC: 1,
};

const VisibilityTypeLabel = {
  [VisibilityType.PRIVATE]: 'Private',
  [VisibilityType.PUBLIC]: 'Public',
};

module.exports = {
  VisibilityType,
  VisibilityTypeLabel,
}