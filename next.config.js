const path = require("path");

module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['lh3.googleusercontent.com', 'www.edamam.com']
  },

  webpack5: true,
            webpack(config) {
                config.module.rules.push({
                    test: /\.svg$/,
                    use: [
                        {
                            loader: "@svgr/webpack",
                            options: {
                                titleProp: true,
                                svgoConfig: {
                                    plugins: {
                                        removeViewBox: false
                                    }
                                }
                            }
                        }
                    ]
                });
                config.resolve.fallback = { fs: false };

               
               

                return config;
            }
}
