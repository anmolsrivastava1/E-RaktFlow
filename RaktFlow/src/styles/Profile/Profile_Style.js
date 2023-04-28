import sy from '../styling';

module.exports = {
  headerWrapper: {
    ...sy.flexRowAlignJustify,
    paddingVertical: 10,
  },
  headerDetails: {
    ...sy.flexRowAlignSB,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  detailsWrapper: {
    paddingLeft: 10,
    marginBottom: 20,
  },
  bodyWrapper: {
    padding: 15,
  },
  btnWrap: {
    ...sy.flexRowAlignSB,
    marginLeft: 10,
  },
  btn: {
    ...sy.rgMdTTxt,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: '#FF5B5F',
    borderRadius: 10,
  },
};
