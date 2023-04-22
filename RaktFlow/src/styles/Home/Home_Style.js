import sy from '../styling';

module.exports = {
  avatarWrapper: {
    ...sy.alignJustify,
    height: 50,
    width: 50,
    borderColor: '#8992AB',
    borderRadius: 25,
    borderWidth: 1,
  },
  alertWrapper: {
    ...sy.alignJustify,
    height: 40,
    width: 40,
    borderColor: '#8992AB',
    borderRadius: 20,
    borderWidth: 1,
  },
  dietPlanWrapper: {
    ...sy.rowAlignJustify,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#E5F1FF',
    shadowColor: '#656565',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  subHeaderText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8992AB',
  },
  titleText: {
    marginBottom: 10,
    marginLeft: 20,
  },
  dietTitleText: {
    color: '#1B2D48',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
};
