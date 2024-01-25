const COLOR_CONFIG = {
	white: {
		DEFAULT: '#fff',
		secondary: '#d9d9d9',
		80: 'rgba(255, 255, 255, 0.80)',
		60: 'rgba(255, 255, 255, 0.60)',
		52: 'rgba(255, 255, 255, 0.52)',
		40: 'rgba(255, 255, 255, 0.40)',
		33: 'rgba(255, 255, 255, 0.33)',
		22: 'rgba(255, 255, 255, 0.22)',
    10: 'rgba(255, 255, 255, 0.10)',
		'06': 'rgba(217, 217, 217, 0.06)',
	},
	primary: {
		DEFAULT: '#09141A',
		radial:
			'radial-gradient(124.23% 171.99% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)',
	},
	secondary: {
		DEFAULT: '#162329',
	},
  golden: {
    DEFAULT: '#94783e'
  },
  card: {
    DEFAULT: '#0E191F'
  }
};

const customComponent = {
	'.ybg-btn-gradient': {
    position: 'relative',
		borderRadius: '8px',
    height: '48px',
		background:
			'linear-gradient(108deg, #62CDCB 24.88%, #4599DB 78.49%)',
		'&:disabled': {
			opacity: '0.5',
		},
    '&:aria-disabled': {
      opacity: '0.5',
		},
		'&:active': {
			background:
				'linear-gradient(108deg, #62CDCB 24.88%, #4599DB 78.49%)',
		},
    '&:after': {
      position: 'absolute',
      content: '""',
      inset: 0,
      borderRadius: '8px',
      background:
        'linear-gradient(108deg, rgba(98, 205, 203, 0.50) 24.88%, rgba(69, 153, 219, 0.50) 78.49%)',
      filter: 'blur(10px)',
    }
	},
	'.ybg-radial': {
		background:
			'radial-gradient(124.23% 171.99% at 100% -3.39%, #1F4247 0%, #0D1D23 56.18%, #09141A 100%)',
	},
	'.ybg-radial-golden': {
		backgroundImage: 'linear-gradient(70deg,#94783e -4.34%,#f3eda6 20.27%,#f8fae5 34.61%,#fee7c6 47.88%,#d5be88 84.8%,#f8fae5 95.7%,#d5be88 107.63%)',
    backgroundSize: '200% auto',
		backgroundClip: 'text',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
    '&:hover': {
      opacity: '0.8',
    },
    '&:active': {
      opacity: '0.6',
    }
	},
  '.ybg-radial-dark': {
		backgroundImage: 'linear-gradient(135deg, #ABFFFD 2.64%, #4599DB 102.4%, #AADAFF 102.4%)',
    backgroundSize: '200% auto',
		backgroundClip: 'text',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
    '&:hover': {
      opacity: '0.8',
    },
    '&:active': {
      opacity: '0.6',
    }
	},
  '.card': {
    borderRadius: '16px',
    background: COLOR_CONFIG.card.DEFAULT,
    padding: '14px 8px'
  },
  '.badge': {
    padding: '8px 16px',
    borderRadius: '9999px',
    background: COLOR_CONFIG.white['06'],
    fontSize: 14,
    fontWeight: 600,
    color: COLOR_CONFIG.white.DEFAULT,
    maxWidth: '10em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transition: '0.3s ease-out',
    '&:hover': {
      maxWidth: '60em'
    }
  }
};

const tailwindPlugin = ({ addComponents }: any) => {
	addComponents(customComponent);
};

export { COLOR_CONFIG, tailwindPlugin };
