/* >>>>>>>>>>>>>>>>>>>>> TEXT <<<<<<<<<<<<<<<<<<<<<<< */

/* ---------------- COLORS ----------------- */

exports.Color = {
  /* Primary Color */
  pClr: {
    color: '#066DE6',
  },
  /* Secondary Color  */
  sClr: {
    color: '#2F327D',
  },
  /* Heading/Text Color  */
  tClr: {
    color: '#1B2D48',
  },
  /* Sub Heading/Text Color  */
  stClr: {
    color: '#8992AB',
  },
  /* White Color  */
  wClr: {
    color: '#FFFFFF',
  },
};

/* -------------- FONT-FAMILY --------------  */

exports.FontFamily = {
  popT: {
    fontFamily: 'Poppins-Thin',
  },
  popEL: {
    fontFamily: 'Poppins-ExtraLight',
  },
  popL: {
    fontFamily: 'Poppins-Light',
  },
  popR: {
    fontFamily: 'Poppins-Regular',
  },
  popM: {
    fontFamily: 'Poppins-Medium',
  },
  popSB: {
    fontFamily: 'Poppins-SemiBold',
  },
  popB: {
    fontFamily: 'Poppins-Bold',
  },
  popEB: {
    fontFamily: 'Poppins-ExtraBold',
  },
  popBlack: {
    fontFamily: 'Poppins-Black',
  },
};

/* -------------- FONT-SIZE --------------- */

exports.FontSize = {
  smTxt: {
    fontSize: 14,
  },
  rgTxt: {
    fontSize: 16,
  },
  mdTxt: {
    fontSize: 18,
  },
  bgTxt: {
    fontSize: 28,
  },
};

/* >>>>>>>>>>>>>>>>>>> DISPLAY <<<<<<<<<<<<<<<<<<<<< */

exports.Display = {
  rgScreen: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 20,
  },
};

exports.FlexView = {
  footerView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
};
