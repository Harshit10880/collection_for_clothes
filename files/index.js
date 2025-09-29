// Sample data for brands and cars
const brands = [
    // 1
    {
        id: 1,
        name: "Shoes",
        description: "Price: $499 - $1799",
        image: "https://i.pinimg.com/1200x/1e/25/f0/1e25f06f0ea2fbc504dd87034ee8f275.jpg",
        cars: [
            { id: 101, model: "Adidas", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/67/05/60/6705605da45b4e4679be5bd5886215f3.jpg", specs: { engine: "V8", horsepower: 496, acceleration: "4.4s" } },
            { id: 102, model: "E-Class", year: 2023, price: 899, image: "https://i.pinimg.com/736x/35/2b/ec/352bec3a1fdec9b7db2b98f7d4840dfd.jpg", specs: { engine: "Inline-6", horsepower: 362, acceleration: "5.1s" } },
            { id: 103, model: "FUDZ", year: 2023, price: 699, image: "https://i.pinimg.com/736x/e2/79/87/e279872667f11e0ab3ab5490a09b274c.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 104, model: "NIKE", year: 2023, price: 999, image: "https://i.pinimg.com/736x/2b/0d/a8/2b0da8243439caba200542684181b3eb.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 105, model: "JESFI", year: 2023, price: 799, image: "https://i.pinimg.com/1200x/5b/37/ad/5b37adc092b0377639ade9af586a07d3.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 106, model: "Naidon", year: 2023, price: 799, image: "https://i.pinimg.com/1200x/21/68/e1/2168e141ed8428ae0717cb2362f07900.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 107, model: "JISIH", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/02/b0/79/02b0799557698f83a04ec3724167531a.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 108, model: "NIKE", year: 2023, price: 1199, image: "https://i.pinimg.com/1200x/5a/2e/47/5a2e479c4752578bd3221221e55f12c2.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 109, model: "NIKE", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/1e/59/8e/1e598e1db5ec22c45bb561a7dbcb853c.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 110, model: "SHMING", year: 2023, price: 899, image: "https://i.pinimg.com/1200x/76/df/d5/76dfd5f5942b43e35b7d1b789212a6ba.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 111, model: "SPORT", year: 2023, price: 499, image: "https://i.pinimg.com/736x/8a/41/61/8a41617e1eb82d2d2b0362339fbea7a2.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 112, model: "KIZIK", year: 2023, price: 699, image: "https://i.pinimg.com/1200x/d1/1d/d9/d11dd992380c0c7cf84b0cb42d57e693.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 113, model: "SKECHERS", year: 2023, price: 1599, image: "https://i.pinimg.com/736x/a5/63/bb/a563bbd4cba4bfa664d110260a326962.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 114, model: "ADIDAS", year: 2023, price: 1399, image: "https://i.pinimg.com/736x/66/a4/b5/66a4b57384a9370d581b2354deb60904.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 115, model: "ADIDAS", year: 2023, price: 1199, image: "https://i.pinimg.com/1200x/1a/3f/45/1a3f459296ca3eff78e64ffdea42f410.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 116, model: "CORVEBSE", year: 2023, price: 899, image: "https://i.pinimg.com/736x/29/d3/99/29d39968be7148eabcac2ea8a8a31a8c.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 117, model: "KuMAN", year: 2023, price: 499, image: "https://i.pinimg.com/736x/18/14/86/181486a602a4d32a82acb24c63116225.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 118, model: "ADIDAS", year: 2023, price: 999, image: "https://i.pinimg.com/736x/1d/78/04/1d7804ab37231d4ccd33c2f65b447363.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 119, model: "NEB", year: 2023, price: 899, image: "https://i.pinimg.com/1200x/64/4e/ed/644eeda9227fd59fda5169e5dabb5532.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
            { id: 120, model: "SPORT", year: 2023, price: 1299, image: "https://i.pinimg.com/736x/aa/34/ea/aa34ea0faeeeb7ea3b08826ecd84935a.jpg", specs: { engine: "V6", horsepower: 429, acceleration: "5.3s" } },
        ]
    },
    // 2
{
    id: 2,
    name: "shirt for men",
    description: "price: $499 - $1899",
    image: "https://i.pinimg.com/1200x/d8/37/a7/d837a755c637bcdf25d0ca492557d872.jpg",
    cars: [
        { id: 201, model: "Denim Shirt", year: 2023, price: 499, image: "https://i.pinimg.com/736x/b1/06/64/b1066476254c801c360446091bb15943.jpg", specs: { engine: "V8", horsepower: 523, acceleration: "4.3s" } },
        { id: 202, model: "Linen Shirt", year: 2023, price: 569, image: "https://i.pinimg.com/736x/86/5c/dc/865cdc8154e718fab8a3492dbbeaa6d3.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 203, model: "Flannel Shirt", year: 2023, price: 639, image: "https://i.pinimg.com/1200x/15/35/37/1535379e07b4b8a1dbf04a288763a71d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 204, model: "Oxford Button-Down", year: 2023, price: 709, image: "https://i.pinimg.com/1200x/d8/37/a7/d837a755c637bcdf25d0ca492557d872.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 205, model: "Hawaiian Shirt", year: 2023, price: 779, image: "https://i.pinimg.com/736x/7d/03/b1/7d03b1e6ea5dd2d2307d5ca486d32b35.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 206, model: "Polo Shirt", year: 2023, price: 849, image: "https://i.pinimg.com/736x/e2/43/46/e24346568752ca0bcdb9bab8aa8875e9.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 207, model: "Tunic Shirt", year: 2023, price: 919, image: "https://i.pinimg.com/1200x/a6/12/80/a612807d10380a41507531ac84a0b347.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 208, model: "Dress Shirt (Slim Fit)", year: 2023, price: 989, image: "https://i.pinimg.com/1200x/c1/4d/b6/c14db6c607a4526c678eff01a0d41080.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 209, model: "Corduroy Shirt", year: 2023, price: 1059, image: "https://i.pinimg.com/736x/52/37/30/523730285cd5556a3cefb2d62d3fbd87.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 210, model: "Chambray Shirt", year: 2023, price: 1129, image: "https://i.pinimg.com/736x/40/fd/dd/40fdddee664cae88b36a33d6979e467d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 211, model: "Cuban Collar Shirt", year: 2023, price: 1199, image: "https://i.pinimg.com/736x/3a/9d/b0/3a9db03c1def0e45ca8a8918fbf9a38a.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 212, model: "Mandarin Collar Shirt", year: 2023, price: 1269, image: "https://i.pinimg.com/1200x/3a/8c/af/3a8cafe73f989cd34b4abf5a95cb8231.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 213, model: "Seersucker Shirt", year: 2023, price: 1339, image: "https://i.pinimg.com/736x/0e/01/96/0e019648e7fe5df074d8ce629a55f62d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 214, model: "Grandad Collar Shirt", year: 2023, price: 1409, image: "https://i.pinimg.com/736x/f2/78/6b/f2786b3f2964c1f3319d8e498f66a44d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 215, model: "Casual Graphic Tee", year: 2023, price: 1479, image: "https://i.pinimg.com/736x/16/1f/16/161f16cf443e7ec5ebaa464ca0646da1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 216, model: "Printed Rayon Shirt", year: 2023, price: 1549, image: "https://i.pinimg.com/736x/97/3b/2d/973b2df521acf08c2dbb43b040e2e301.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 217, model: "Workwear Overshirt", year: 2023, price: 1619, image: "https://i.pinimg.com/1200x/ac/c2/f1/acc2f137d0470f60785e47f127aa1624.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 218, model: "Short Sleeve Knit", year: 2023, price: 1689, image: "https://i.pinimg.com/1200x/20/6e/b8/206eb8892e3767e99e26b88476e59e8b.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 219, model: "Heavy Cotton Shirt", year: 2023, price: 1759, image: "https://i.pinimg.com/1200x/dc/e6/21/dce6218914231b52cb0f6097519a84e8.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 220, model: "Silk Blend Shirt", year: 2023, price: 1829, image: "https://i.pinimg.com/1200x/37/c2/dc/37c2dc069d2e58f7348f21452d77d139.jpg", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
    ]
},
    // 3
   {
    id: 3,
    name: "Pants",
    description: "Price: $899 - $2499",
    image: "https://i.pinimg.com/1200x/72/16/9f/72169f0de641503a1d8a2218d0cb6f9f.jpg",
    cars: [
        { id: 301, model: "Denim Jeans", year: 2023, price: 899, image: "https://i.pinimg.com/1200x/5c/c0/57/5cc0577c06bc50fa7ea2b8b0d1b5d2f9.jpg", specs: { engine: "V6", horsepower: 335, acceleration: "5.6s" } },
        { id: 302, model: "Chinos", year: 2023, price: 979, image: "https://i.pinimg.com/736x/47/59/f1/4759f19ea151bc2cbffdbf5bb5b0b878.jpg", specs: { engine: "V6", horsepower: 335, acceleration: "5.7s" } },
        { id: 303, model: "Trousers (Wool)", year: 2023, price: 1059, image: "https://i.pinimg.com/1200x/1f/f5/da/1ff5dac04db6eef2fbfd90d1575079c4.jpg", specs: { engine: "V10", horsepower: 562, acceleration: "3.4s" } },
        { id: 304, model: "Cargo Pants", year: 2023, price: 1139, image: "https://i.pinimg.com/1200x/26/54/95/265495a3a7f861a83fe0888f62d3d542.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 305, model: "Dress Pants (Slim)", year: 2023, price: 1219, image: "https://i.pinimg.com/1200x/9b/1e/b6/9b1eb69d20024d86364a3c2eefa223e2.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 306, model: "Joggers", year: 2023, price: 1299, image: "https://i.pinimg.com/1200x/d4/9c/5f/d49c5ff1c35bac7b680c6655116d0bf1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 307, model: "Corduroy Pants", year: 2023, price: 1379, image: "https://i.pinimg.com/736x/bd/2d/2c/bd2d2cad2750851ebf4e0c0523ff24d6.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 308, model: "Linen Trousers", year: 2023, price: 1459, image: "https://i.pinimg.com/736x/d5/50/9b/d5509b8e6e61645c4ab5d32e315e89cc.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 309, model: "Athletic Sweatpants", year: 2023, price: 1539, image: "https://i.pinimg.com/73x/9f/36/66/9f36665acf2c464a74caf69c5b1dca09.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 310, model: "Flared Trousers", year: 2023, price: 1619, image: "https://i.pinimg.com/1200x/5c/c0/57/5cc0577c06bc50fa7ea2b8b0d1b5d2f9.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 311, model: "Leather Pants", year: 2023, price: 1699, image: "https://i.pinimg.com/736x/8e/24/d8/8e24d89579633746f3fce09cdf1a802d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 312, model: "Workwear Trousers", year: 2023, price: 1779, image: "https://i.pinimg.com/73x/98/21/f2/9821f2f001cb338b175f72a2a4389196.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 313, model: "Relaxed Fit Jeans", year: 2023, price: 1859, image: "https://i.pinimg.com/736x/c8/7f/a8/c87fa831c057519879e5971c816cb43a.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 314, model: "Bootcut Trousers", year: 2023, price: 1939, image: "https://i.pinimg.com/736x/e3/3d/55/e33d55a11f281ff07ad1609546ff5d69.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 315, model: "Velvet Trousers", year: 2023, price: 2019, image: "https://i.pinimg.com/1200x/f4/12/ff/f412ff6004edb3d4b07ff105547eb8da.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 316, model: "Cropped Pants", year: 2023, price: 2099, image: "https://i.pinimg.com/1200x/ca/ca/04/caca04e8ab34e7c17162d80c63723cfe.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 317, model: "Techwear Trousers", year: 2023, price: 2179, image: "https://i.pinimg.com/73x/30/ac/87/30ac87b664b67d1f59820ba2524191dc.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 318, model: "Pajama Style Pants", year: 2023, price: 2259, image: "https://i.pinimg.com/73x/ae/29/a6/ae29a6b785d35b850b800eb4673f6351.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 319, model: "Pleated Trousers", year: 2023, price: 2339, image: "https://i.pinimg.com/1200x/26/54/95/265495a3a7f861a83fe0888f62d3d542.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        { id: 320, model: "Bermuda Shorts", year: 2023, price: 2419, image: "https://i.pinimg.com/1200x/89/b8/3a/89b83a6ef090239a94e6776518bb2da2.jpg", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
    ]
},
    // 4    
    {
        id: 4,
        name: "Watch",
        description: "Price: $199 - $899",
        image: "https://i.pinimg.com/736x/17/72/48/17724890396cc18e5c65474ecef8615c.jpg",
        cars: [
            { id: 401, model: "911 Turbo S", year: 2023, price: 210000, image: "https://i.pinimg.com/736x/65/3e/16/653e16aacb7ae23e4379f6a6856ddd65.jpg", specs: { engine: "Flat-6", horsepower: 640, acceleration: "2.6s" } },
            { id: 402, model: "Cayenne", year: 2023, price: 85000, image: "https://i.pinimg.com/1200x/88/b8/ed/88b8ed6a0efc2ba276ba9de7711d7b56.jpg", specs: { engine: "V6", horsepower: 335, acceleration: "5.9s" } },
            { id: 403, model: "Taycan", year: 2023, price: 105000, image: "https://i.pinimg.com/1200x/45/c2/de/45c2de3b045ace3f72b93e08cf4bf100.jpg", specs: { engine: "Electric", horsepower: 469, acceleration: "4.8s" } },
            { id: 404, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/736x/c7/f2/6d/c7f26d7602d63e3b4e178f9776247e75.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 405, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/1200x/c1/17/06/c11706501383c4595485948c36acb9a7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 406, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/736x/c5/08/77/c508772d3d97c084e91cf4473fac7bc4.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 407, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/736x/49/00/48/49004861dc1103527b8a9cea7ea7361b.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 408, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/1200x/ee/ae/20/eeae2004435de0b77c4b5a1bf9afc36a.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 409, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/736x/52/c2/9b/52c29bdbafaf1cec217d293bd30ae6b6.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 410, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/736x/ea/81/84/ea8184a8ef15bca71c1fd1039e4cef6f.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 411, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/736x/ae/b3/ff/aeb3ff0194b7b3fd98e59c0f82f9dffe.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 412, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/1200x/c6/00/0c/c6000c17299401ec8f2a2681700374b7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 413, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/736x/8b/60/af/8b60afe89320b5daf36f561263fd85c7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 414, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/1200x/2d/af/db/2dafdbdd38117f98b002739aae446db8.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 415, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/1200x/81/26/de/8126de8073ad29b1d32c722a5f57b8a1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 416, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/736x/c3/31/13/c33113306e636fafa016b23fdf5f3d48.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 417, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/1200x/62/3f/d3/623fd3c4d75e47fd05ceb0c8ed41c558.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 418, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/736x/07/59/44/0759441024e72d8d17b071fea7e64403.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 419, model: "X5", year: 2023, price: 78000, image: "https://i.pinimg.com/736x/7c/ec/91/7cec917b4101a5f8dcf2fab18f0897bf.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 420, model: "i8", year: 2023, price: 150000, image: "https://i.pinimg.com/736x/8c/66/eb/8c66ebaf225ff37d567689a9c3f2f991.jpg", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },
    //5    
    {
        id: 5,
        name: "Kurties",
        description: "Price: $599 - $1499",
        image: "https://i.pinimg.com/1200x/2f/fc/6a/2ffc6aa12a1ee99bbcfec25eb840bcfb.jpg",
        cars: [
            { id: 501, model: "Anarkali Kurti", year: 2023, price: 499, image: "https://i.pinimg.com/736x/02/6e/d3/026ed335d221e43146e8e4e3dfbf6c3a.jpg", specs: { engine: "Electric", horsepower: 1020, acceleration: "1.99s" } },
            { id: 502, model: "Straight Cut Kurti", year: 2023, price: 599, image: "https://i.pinimg.com/736x/1e/87/6d/1e876d7ed52c0cb898708f117ddbc387.jpg", specs: { engine: "Electric", horsepower: 670, acceleration: "3.8s" } },
            { id: 503, model: "Cybertruck", year: 2023, price: 529, image: "https://i.pinimg.com/736x/75/18/e2/7518e2eb1b3692100b9a72620f99ced0.jpg", specs: { engine: "Electric", horsepower: 800, acceleration: "2.9s" } },
            { id: 504, model: "A-Line Kurti", year: 2023, price: 789, image: "https://i.pinimg.com/736x/2f/8b/8d/2f8b8d3fc52055c81077ce007975b3d0.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 505, model: "Tail Cut Kurti", year: 2023, price: 1199, image: "https://i.pinimg.com/736x/46/30/40/46304014d548be91ae407525d2e9696e.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 506, model: "C-Cut Kurti", year: 2023, price: 1299, image: "https://i.pinimg.com/736x/d0/f9/39/d0f939d48a2ade61f15e3b2bf0da90d9.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 507, model: "High-Low Kurti", year: 2023, price: 999, image: "https://i.pinimg.com/736x/06/29/f4/0629f452680231dc4e844cc07cfa7237.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 508, model: "Flared Kurti", year: 2023, price: 1499, image: "https://i.pinimg.com/1200x/5d/f9/c9/5df9c9765fd829219a3b4c542591eb6a.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 509, model: "Dhoti Style Kurti", year: 2023, price: 1399, image: "https://i.pinimg.com/1200x/fd/93/58/fd9358927325d3edacb805f5dfed9037.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 510, model: "Frock Style Kurti", year: 2023, price: 1229, image: "https://i.pinimg.com/736x/01/45/91/0145918b85e4535c87cccaae0f13ab73.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 511, model: "Kaftan Kurti", year: 2023, price: 789, image: "https://i.pinimg.com/1200x/3a/d9/e5/3ad9e5b13c085db5a07599cb42c70db9.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 512, model: "Asymmetric Kurti", year: 2023, price: 989, image: "https://i.pinimg.com/736x/e4/99/d6/e499d6eb3c06ad27fd427a64a4d673a8.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 513, model: "Shirt Style Kurti", year: 2023, price: 529, image: "https://i.pinimg.com/736x/ee/cc/93/eecc93b5d74ba27929de8915e40dcd0e.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 514, model: "Princess Cut Kurti", year: 2023, price: 629, image: "https://i.pinimg.com/736x/c5/fb/2b/c5fb2ba7168dd9ab31256e6fb03befa7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 515, model: "Panel Kurti", year: 2023, price: 1999, image: "https://i.pinimg.com/736x/a3/c5/15/a3c5157c78b6c143a95291e4732cc0c8.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 516, model: "Indo-Western Kurti", year: 2023, price: 1299, image: "https://i.pinimg.com/736x/9f/ff/7d/9fff7d43e99616628a0685cdd47eb573.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 517, model: "Tunic Kurti", year: 2023, price: 599, image: "https://i.pinimg.com/736x/5e/a7/b3/5ea7b39ca8fe676a388cbd483c64002d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 518, model: "Jacket Style Kurti", year: 2023, price: 699, image: "https://i.pinimg.com/736x/1d/4c/8d/1d4c8d26c64eb333ff4b300925978901.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 519, model: "Layered Kurti", year: 2023, price: 599, image: "https://i.pinimg.com/736x/41/25/09/41250904f5d9ebeae00e9582f6d4b1e7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 520, model: "Embroidered Kurti", year: 2023, price: 989, image: "https://i.pinimg.com/736x/1b/2a/88/1b2a886cdbbeb75c5e127104223b1ae6.jpg", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },
    //6
    {
        id: 6,
        name: "Sarees",
        description: "Price: $1599 - $3499",
        image: "https://i.pinimg.com/1200x/84/ba/44/84ba440441f2c801eede64c5dac3107d.jpg",
        cars: [
            { id: 601, model: "Banarasi", year: 2023, price: 1699, image: "https://i.pinimg.com/1200x/cd/a4/f0/cda4f03ca3634bd2d155aa32520e8e4b.jpg", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 602, model: "Paithani", year: 2023, price: 1799, image: "https://i.pinimg.com/736x/86/61/a6/8661a679efd5202f1be3875585b32587.jpg", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 603, model: "Paithani", year: 2023, price: 2399, image: "https://i.pinimg.com/736x/73/8f/a1/738fa1ef73b8854af068b74d91f95e63.jpg", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 604, model: "Patola", year: 2023, price: 2999, image: "https://i.pinimg.com/736x/75/87/ae/7587aebaf81f708d668c9e9c8d55a111.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 605, model: "Mysore Silk", year: 2023, price: 1899, image: "https://i.pinimg.com/1200x/c9/18/f7/c918f7b1b291111d3bb3daf443045f90.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 606, model: "Sambalpuri", year: 2023, price: 3199, image: "https://i.pinimg.com/1200x/7f/92/f6/7f92f6b64b5e1c6760d74f7a3130073a.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 607, model: "Pochampally Ikat", year: 2023, price: 3329, image: "https://i.pinimg.com/1200x/8b/69/1a/8b691aeb62447e3f95cfc5343db225f1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 608, model: "Bandhani", year: 2023, price: 1629, image: "https://i.pinimg.com/736x/ea/29/35/ea2935913b10f8868111ec0520ae4ae0.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 609, model: "Leheriya", year: 2023, price: 1599, image: "https://i.pinimg.com/736x/3c/ea/8b/3cea8bea92f717a760a157f135f545c3.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 610, model: "Chikankari", year: 2023, price: 2459, image: "https://i.pinimg.com/1200x/fb/5f/45/fb5f4537a641afcb18a122354fff4410.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 611, model: "Chanderi", year: 2023, price: 2799, image: "https://i.pinimg.com/736x/68/53/f3/6853f36e90fd1d76a87e18ad5a990c05.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 612, model: "Bhandhani", year: 2023, price: 2999, image: "https://i.pinimg.com/736x/11/91/be/1191be877ceb3e7e6ae566a731a90656.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 613, model: "Bomkai", year: 2023, price: 2389, image: "https://i.pinimg.com/736x/ce/d2/62/ced2623fe56c4de4dec86e593adee520.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 614, model: "Phulkari", year: 2023, price: 3399, image: "https://i.pinimg.com/736x/0e/b8/33/0eb8339b4e0b7ee9760eb7d30d2f1300.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 615, model: "Kasavu", year: 2023, price: 3499, image: "https://i.pinimg.com/736x/59/25/a0/5925a01f5fc4ab9e5f13fe5ba36ec7be.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 616, model: "Kota Doria", year: 2023, price: 3499, image: "https://i.pinimg.com/736x/ad/df/48/addf48f2f5caabde85ad28594a26c5cb.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 617, model: "eheriy", year: 2023, price: 2899, image: "https://i.pinimg.com/736x/4d/d0/9c/4dd09ccc2514d15d35c15853c3d5b8c3.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 618, model: "Dhakai Jamdani", year: 2023, price: 1999, image: "https://i.pinimg.com/736x/e3/93/94/e393944860ea710e53bb52ce1adf8469.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 619, model: "Phulkari", year: 2023, price: 2599, image: "https://i.pinimg.com/736x/b6/d5/30/b6d5303c68bca66549cfce0b7e877c0d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 620, model: "Phulkari", year: 2023, price: 3299, image: "https://i.pinimg.com/736x/ab/00/e3/ab00e3e4fa2f11504a441418612c4699.jpg", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },
    //7
    {
        id: 7,
        name: "T-shirt for women",
        description: "Price: $499 - $999",
        image: "https://i.pinimg.com/736x/1f/9f/7d/1f9f7da79c3bd03ca461ef52bc532339.jpg",
        cars: [
            { id: 701, model: "", year: 2023, price: 699, image: "https://i.pinimg.com/736x/0f/a6/7a/0fa67a457afe88c692821fd6beaf8fc0.jpg", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 702, model: "", year: 2023, price: 799, image: "https://i.pinimg.com/736x/c2/70/8a/c2708a970ffad7ab8247d9e6a9951cae.jpg", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 703, model: "", year: 2023, price: 899, image: "https://i.pinimg.com/736x/53/98/27/539827d63170fae158df825314fb85b4.jpg", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 704, model: "", year: 2023, price: 999, image: "https://i.pinimg.com/736x/fe/28/e6/fe28e669a9229224e7f641f8bca468b8.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 705, model: "", year: 2023, price: 629, image: "https://i.pinimg.com/1200x/18/41/30/18413014dc432d462c8d98e5dfaa4087.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 706, model: "", year: 2023, price: 529, image: "https://i.pinimg.com/736x/f5/65/42/f565424e95408cb1c6064f6aea5dfd23.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 707, model: "", year: 2023, price: 499, image: "https://i.pinimg.com/736x/6c/c1/6e/6cc16efc4b61c65c276d51117ae45bf8.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 708, model: "", year: 2023, price: 499, image: "https://i.pinimg.com/1200x/79/9b/97/799b97dba5e91865cf7b7587e057ae62.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 709, model: "", year: 2023, price: 689, image: "https://i.pinimg.com/1200x/bd/b9/03/bdb903ce10df25930a309474168eaed8.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 710, model: "", year: 2023, price: 789, image: "https://i.pinimg.com/1200x/69/4b/d3/694bd3769cc8416ccb49354169dcb49d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 711, model: "", year: 2023, price: 999, image: "https://i.pinimg.com/736x/a2/c2/9d/a2c29d03f07b4a2e43f2bd283d69901c.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 712, model: "", year: 2023, price: 989, image: "https://i.pinimg.com/736x/ff/15/5b/ff155bda8ff696514f33de85258bb83e.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 713, model: "", year: 2023, price: 569, image: "https://i.pinimg.com/1200x/37/01/cc/3701ccccb1becc58eff535d0c3202de1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } }
        ]
    },
    //9
    {
        id: 9,
        name: "Hoodie",
        description: "Price: $899 - $1999",
        image: "https://i.pinimg.com/736x/8f/e8/80/8fe880fdfd766ed53deacadd0b39177e.jpg",
        cars: [
            { id: 901, model: "Pullover Hoodie", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/0e/34/eb/0e34ebf27fa5b765192b872f481a6545.jpg", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 902, model: "Zip-Up HoodieF-Pace", year: 2023, price: 1499, image: "https://i.pinimg.com/736x/40/06/bc/4006bceb794ca821ae5ef1a453a65cc4.jpg", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 903, model: "Oversized Hoodie", year: 2023, price: 1399, image: "https://i.pinimg.com/1200x/61/bd/98/61bd988b3c2251872015a903a26c332f.jpg", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 904, model: "Sherpa-Lined Hoodie", year: 2023, price: 1499, image: "https://i.pinimg.com/1200x/92/17/7b/92177b525c772560abc1ecbed518154e.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 905, model: "Baja Hoodie", year: 2023, price: 1899, image: "https://i.pinimg.com/1200x/78/c5/5e/78c55e0765db60d3073cabede071d4dc.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 906, model: "Knitted Hoodie ", year: 2023, price: 1999, image: "https://i.pinimg.com/1200x/c5/3b/21/c53b21cb78f31c2734933259e21949da.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 907, model: "Lightweight Hoodie", year: 2023, price: 1499, image: "https://i.pinimg.com/736x/6e/7a/94/6e7a941da21b5e267c9d4f8a8fa7f84d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 908, model: "Raglan Hoodie", year: 2023, price: 999, image: "https://i.pinimg.com/736x/84/1b/d0/841bd0c4c63c2f47776443d4e7af2e8a.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 909, model: "XCardigan Hoodie5", year: 2023, price: 829, image: "https://i.pinimg.com/1200x/db/f8/1a/dbf81a263d8c0f5dda956e836429c29e.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 910, model: "Cardigan Hoodie", year: 2023, price: 929, image: "https://i.pinimg.com/1200x/b4/5d/6e/b45d6e328d73dd48866db3727f3ce5be.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 911, model: "X5", year: 2023, price: 1199, image: "https://i.pinimg.com/736x/19/e0/16/19e016bad193417fd1e12ff2d30be80a.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 912, model: "X5", year: 2023, price: 1299, image: "https://i.pinimg.com/1200x/de/b6/c8/deb6c87025d73cb78eca2b98e3e60e28.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 913, model: "X5", year: 2023, price: 1229, image: "https://i.pinimg.com/1200x/2a/f0/41/2af04134bc995daa9426e34568805f9b.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 914, model: "X5", year: 2023, price: 1499, image: "https://i.pinimg.com/736x/fb/f2/2c/fbf22c338254a2f17c63acdbabfb646e.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 915, model: "X5", year: 2023, price: 1599, image: "https://i.pinimg.com/736x/b4/98/c5/b498c515bb7761efa701f2107855db05.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 916, model: "X5", year: 2023, price: 1699, image: "https://i.pinimg.com/736x/56/26/b6/5626b6febad8cf5689cc0856449c9d6a.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 917, model: "X5", year: 2023, price: 1999, image: "https://i.pinimg.com/736x/ae/20/74/ae2074eda675a5867069fcda7fb0c2ef.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 918, model: "X5", year: 2023, price: 1199, image: "https://i.pinimg.com/736x/8b/57/c0/8b57c00f126627e9ce7899b6938ef0a1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } }
        ]
    },
    //10
    {
        id: 10,
        name: "T-shirts for men",
        description: "Price: $599 - $999",
        image: "https://i.pinimg.com/1200x/5a/4b/ab/5a4bab5f3e59eabf85a71ffe2f8b7f86.jpg",
        cars: [
            { id: 1001, model: "", year: 2023, price: 699, image: "https://i.pinimg.com/736x/aa/be/b5/aabeb5e202185509200a543e9168c88d.jpg", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 1002, model: "", year: 2023, price: 899, image: "https://i.pinimg.com/1200x/7c/69/74/7c6974f728649407513b2d821dbb9d09.jpg", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 1003, model: "", year: 2023, price: 729, image: "https://i.pinimg.com/1200x/c4/4c/42/c44c42645f92d10ce06b815485d3cab6.jpg", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 1004, model: "", year: 2023, price: 599, image: "https://i.pinimg.com/1200x/c4/3d/9e/c43d9e2455828870e15bdbf8ff64aa10.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1005, model: "", year: 2023, price: 699, image: "https://i.pinimg.com/1200x/1d/39/04/1d3904fa6ff7f9afcc0d57f9c347151c.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1006, model: "", year: 2023, price: 729, image: "https://i.pinimg.com/1200x/5a/4b/ab/5a4bab5f3e59eabf85a71ffe2f8b7f86.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1007, model: "", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/d5/7c/ac/d57cac286ec887fca70d2ca523cc81f0.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1008, model: "", year: 2023, price: 899, image: "https://i.pinimg.com/1200x/90/88/ab/9088ab2ae80af0ee0b44533b3242d29c.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1009, model: "", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/86/f9/4b/86f94bea8296461dca932d63cd2658e1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1010, model: "", year: 2023, price: 799, image: "https://i.pinimg.com/736x/0d/8d/a2/0d8da24a45353ff7e1823e4f77e07f09.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1011, model: "", year: 2023, price: 629, image: "https://i.pinimg.com/1200x/28/93/5f/28935f991aa908a7ab884a4e4c34f18e.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1012, model: "", year: 2023, price: 729, image: "https://i.pinimg.com/1200x/99/08/28/990828c802c6b904e53a2f1263b945f1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1013, model: "", year: 2023, price: 899, image: "https://i.pinimg.com/1200x/80/2c/fc/802cfc953e9c9f686f40c38ef286742b.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1014, model: "", year: 2023, price: 929, image: "https://i.pinimg.com/1200x/02/9d/2a/029d2a83633f7b522e90ec78a17a00f0.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1015, model: "", year: 2023, price: 599, image: "https://i.pinimg.com/736x/13/63/3e/13633e2d5f8a9e12bb6a4409e564d12e.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1016, model: "", year: 2023, price: 629, image: "https://i.pinimg.com/1200x/5a/24/86/5a2486177ccaf0ebf55e16cf7512a8ac.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1017, model: "", year: 2023, price: 799, image: "https://i.pinimg.com/1200x/c4/8b/3f/c48b3f904a7ebc8b5663d8bcb244b682.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1018, model: "", year: 2023, price: 899, image: "https://i.pinimg.com/1200x/97/51/79/975179db7be27116d510bcd0f31972ff.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } }
        ]
    },

    {
        id: 11,
        name: "Combo for men",
        description: "Price: $599 - $999",
        image: "https://i.pinimg.com/1200x/65/ac/08/65ac08475c602140c1c1705efb9abc6f.jpg",
        cars: [
            { id: 1001, model: "", year: 2023, price: 899, image: "https://i.pinimg.com/1200x/6c/d9/15/6cd915bed9ecf5327cb83be3a076c5bf.jpg", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 1002, model: "", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/4d/b8/98/4db898ac8fa1ff820a923d8c6db72a8e.jpg", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 1003, model: "", year: 2023, price: 899, image: "https://i.pinimg.com/736x/f4/b5/bb/f4b5bb7ee663377632d85c04423f2527.jpg", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 1004, model: "", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/a5/99/ff/a599ff860a9e540ed9556f5bd190235a.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1005, model: "", year: 2023, price: 629, image: "https://i.pinimg.com/1200x/02/a1/ab/02a1ab71dcf9042ec0ca28d249569088.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1006, model: "", year: 2023, price: 599, image: "https://i.pinimg.com/1200x/a9/5f/d9/a95fd9ce80a168d95e7351783dd4cc71.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1007, model: "", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/48/bd/b3/48bdb3e8314097874bf683655f1b77d6.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1008, model: "", year: 2023, price: 599, image: "https://i.pinimg.com/736x/80/0b/a7/800ba71d3abec8c3ca66d473d3a55e93.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1009, model: "", year: 2023, price: 799, image: "https://i.pinimg.com/736x/f1/de/86/f1de86d99d04333717cf881d41f5bb2a.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1010, model: "", year: 2023, price: 899, image: "https://i.pinimg.com/1200x/72/66/ac/7266ac6c762f25d0bd6c5ec14d050dd8.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1011, model: "", year: 2023, price: 599, image: "hhttps://i.pinimg.com/736x/40/f9/b4/40f9b43e3559baaa91bfd0b83bda958c.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1012, model: "", year: 2023, price: 629, image: "https://i.pinimg.com/736x/09/82/e4/0982e4b9d615f686077ab59a65b41e94.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1013, model: "", year: 2023, price: 729, image: "https://i.pinimg.com/736x/61/95/04/61950404908ab8e06984e3dd3eb72db7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1014, model: "", year: 2023, price: 899, image: "https://i.pinimg.com/736x/6a/05/14/6a0514233108cc0cdd8138ab3ca31434.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1015, model: "", year: 2023, price: 829, image: "https://i.pinimg.com/736x/e1/06/b7/e106b7a3a85756b1b9878dab7378d4e5.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } }
        ]
    },

    {
        id: 12,
        name: "Women's wearing",
        description: "Price: $699 - $1499",
        image: "https://i.pinimg.com/736x/ae/64/c4/ae64c4e3bdb807436de54110a7b8bbe1.jpg",
        cars: [
            { id: 1001, model: "", year: 2023, price: 799, image: "https://i.pinimg.com/736x/f9/07/2f/f9072f788be7876f2194b3258cceeea1.jpg", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 1002, model: "", year: 2023, price: 699, image: "https://i.pinimg.com/736x/fa/0f/da/fa0fda73d7c24645d9cfa4f94d36c8fb.jpg", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 1003, model: "", year: 2023, price: 1199, image: "https://www.sunnderly.com/cdn/shop/files/Olive-118_5d4c4899-2df8-4716-bd1c-768f4c618fd7.jpg?v=1740120821&width=720", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 1004, model: "", year: 2023, price: 1299, image: "https://i.pinimg.com/736x/58/c2/94/58c2949881f4477a6ebc4e05668f688f.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1005, model: "", year: 2023, price: 1399, image: "https://i.pinimg.com/1200x/c1/62/a8/c162a81f59e9e78494fab670b9c69070.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1006, model: "", year: 2023, price: 1429, image: "https://i.pinimg.com/1200x/63/2c/8f/632c8f62be8201b53001653f289eb783.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1007, model: "", year: 2023, price: 1399, image: "https://i.pinimg.com/736x/03/3b/7c/033b7c640f422550e33f9cf356611f3a.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1008, model: "", year: 2023, price: 1129, image: "https://i.pinimg.com/1200x/97/c0/94/97c0945b72c624f8951ee9a1db8967e1.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1009, model: "", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/8b/fc/cf/8bfccf90c26bc35604a44a55941338f2.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1010, model: "", year: 2023, price: 899, image: "https://i.pinimg.com/736x/fe/5d/92/fe5d92b213e00cb7cc720883ba96292f.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            // { id: 1011, model: "", year: 2023, price: 799, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            // { id: 1012, model: "", year: 2023, price: 699, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            // { id: 1013, model: "", year: 2023, price: 1299, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            // { id: 1014, model: "", year: 2023, price: 1499, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            // { id: 1015, model: "", year: 2023, price: 1129, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            // { id: 1016, model: "", year: 2023, price: 1399, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            // { id: 1017, model: "", year: 2023, price: 1199, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            // { id: 1018, model: "", year: 2023, price: 999, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            // { id: 1019, model: "", year: 2023, price: 799, image: "", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            // { id: 1020, model: "", year: 2023, price: 999, image: "", specs: { engine: "Hybrid", horsepower: 369, acceleration: "4.2s" } }
        ]
    },

    {
        id: 13,
        name: "Suite men",
        description: "Price: $1999 - $3999",
        image: "https://i.pinimg.com/736x/07/5f/24/075f24f7d4b3ac0eede5a1eed06dc08b.jpg",
        cars: [
            { id: 1001, model: "", year: 2023, price: 2999, image: "https://i.pinimg.com/736x/30/9f/76/309f769e7640a94bb0b1624bf255de40.jpg", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 1002, model: "", year: 2023, price: 2499, image: "https://i.pinimg.com/736x/9d/c2/8e/9dc28efb6fc66db612f07a146101795a.jpg", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 1003, model: "", year: 2023, price: 2699, image: "https://i.pinimg.com/736x/a2/88/93/a288938387aacfb2387569abe555277e.jpg", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 1004, model: "", year: 2023, price: 2999, image: "https://i.pinimg.com/736x/93/86/f5/9386f52e56c529d53e79a9496a81e44b.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1005, model: "", year: 2023, price: 3699, image: "https://i.pinimg.com/1200x/8b/ba/95/8bba958df53b70b6a9b8c326ec371b5c.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1006, model: "", year: 2023, price: 3799, image: "https://i.pinimg.com/736x/19/c0/cf/19c0cf3bee1425c3c3eafe8ac97fea81.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1007, model: "", year: 2023, price: 3399, image: "https://i.pinimg.com/736x/ea/09/ec/ea09ec18ac4e39177af14e7d42975508.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1008, model: "", year: 2023, price: 3199, image: "https://i.pinimg.com/736x/ec/8e/2d/ec8e2d6caa3d9e5b837b77a411560684.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1009, model: "", year: 2023, price: 2629, image: "https://i.pinimg.com/736x/26/92/60/2692601e927395610bc3e3b2c803294d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1010, model: "", year: 2023, price: 3399, image: "https://i.pinimg.com/1200x/da/23/a5/da23a5aa231d464530ebc0f521e64b65.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1011, model: "", year: 2023, price: 3999, image: "https://i.pinimg.com/736x/51/c6/e9/51c6e9359fbcab9e79fd530827f3282d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1012, model: "", year: 2023, price: 1999, image: "https://i.pinimg.com/736x/0e/6e/67/0e6e676c5f63c37077f153ed4c977d3e.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1013, model: "", year: 2023, price: 2299, image: "https://i.pinimg.com/1200x/17/26/96/172696f3c6d6808634c82fbb2acff70f.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1014, model: "", year: 2023, price: 2699, image: "https://i.pinimg.com/1200x/82/52/52/825252660c4d5130e7f774a6f50d1729.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        ]
    },

    {
        id: 14,
        name: "Dresses",
        description: "Price: $899 - $2399",
        image: "https://i.pinimg.com/736x/a9/09/70/a909701eb03c9ce01759a1633616fbab.jpg",
        cars: [
            { id: 1001, model: "F-Type", year: 2023, price: 999, image: "https://i.pinimg.com/736x/26/09/24/260924c3296b2b2c288fbf1a3140bf70.jpg", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 1002, model: "F-Pace", year: 2023, price: 1299, image: "https://i.pinimg.com/736x/cf/13/1b/cf131bff23dc577b071d6c4eb3a30ee1.jpg", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 1003, model: "XE", year: 2023, price: 1999, image: "https://i.pinimg.com/1200x/9f/f2/06/9ff206af218a895cb0f2773561c3c381.jpg", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 1004, model: "X5", year: 2023, price: 1899, image: "https://i.pinimg.com/1200x/41/72/a7/4172a749ebfdd5de9268a3cc2b812116.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1005, model: "X5", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/51/b8/1b/51b81bdd3d8d31d4acc3c7acb926ed0e.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1006, model: "X5", year: 2023, price: 1299, image: "https://i.pinimg.com/736x/b8/a6/b7/b8a6b7647357f52279d855412626057f.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1007, model: "X5", year: 2023, price: 1829, image: "https://i.pinimg.com/1200x/15/83/2c/15832c4e5ef1faa093162282e4ff900d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1008, model: "X5", year: 2023, price: 1699, image: "https://i.pinimg.com/1200x/73/5e/de/735ede9184cd7223434f280e4122a63d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1009, model: "X5", year: 2023, price: 1129, image: "https://i.pinimg.com/1200x/a5/67/9b/a5679bf9b438e3254c8b61ea98dcf18e.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1010, model: "X5", year: 2023, price: 1499, image: "https://i.pinimg.com/736x/02/91/8f/02918ff7dc1f3730bd03e2c1148e1a11.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1011, model: "X5", year: 2023, price: 2129, image: "https://i.pinimg.com/1200x/8f/88/25/8f8825c5b693ba918e1889e2aacc367f.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1012, model: "X5", year: 2023, price: 2299, image: "https://i.pinimg.com/736x/3a/14/2d/3a142d395a5c91144914f0b41336706d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1013, model: "X5", year: 2023, price: 2399, image: "https://i.pinimg.com/736x/c3/b6/a6/c3b6a6e6ee690558fc1198b421b650df.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1014, model: "X5", year: 2023, price: 2299, image: "https://i.pinimg.com/1200x/09/7e/8e/097e8eb8301002c68db3eefbdaf05509.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1015, model: "X5", year: 2023, price: 2199, image: "https://i.pinimg.com/1200x/c7/e7/58/c7e75839be4eee974a3f318eb2e79415.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1016, model: "X5", year: 2023, price: 1999, image: "https://i.pinimg.com/736x/02/fc/4e/02fc4e30a0caa28d0f23e5257cde1efe.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1017, model: "X5", year: 2023, price: 1199, image: "https://i.pinimg.com/736x/ed/07/05/ed070569d06fd16aceadf884432089c5.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        ]
    },

    {
        id: 15,
        name: "Chaniya Choli",
        description: "Price: $1599 - $3999",
        image: "https://i.pinimg.com/736x/37/bd/c4/37bdc41d0ed73b1264dcc160ce013ac7.jpg",
        cars: [
            { id: 1001, model: "F-Type", year: 2023, price: 1699, image: "https://i.pinimg.com/1200x/81/1c/44/811c44bfb3a703d112959abd318ffca4.jpg", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 1002, model: "F-Pace", year: 2023, price: 1799, image: "https://i.pinimg.com/1200x/9b/6f/bf/9b6fbf8d101ad0a5f591f4f5e69c470f.jpg", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 1003, model: "XE", year: 2023, price: 3699, image: "https://i.pinimg.com/736x/23/4f/d8/234fd8cb1b75d1850388430208ef47fa.jpg", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 1004, model: "X5", year: 2023, price: 3799, image: "https://i.pinimg.com/736x/44/76/9e/44769e3c24a1ef8b4716d79da8ed4c24.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1005, model: "X5", year: 2023, price: 3999, image: "https://i.pinimg.com/736x/d0/60/5e/d0605eec098184bdcf08b1b66f531930.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1006, model: "X5", year: 2023, price: 3199, image: "https://i.pinimg.com/1200x/25/d5/62/25d56255ebaaf43ddcee886c9db305f0.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1007, model: "X5", year: 2023, price: 3299, image: "https://i.pinimg.com/736x/80/68/83/806883b98efca3a6f3f3b37b04c04669.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1008, model: "X5", year: 2023, price: 3399, image: "https://i.pinimg.com/1200x/38/89/4e/38894ed8f1acbc01478281b1d39e2782.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1009, model: "X5", year: 2023, price: 2399, image: "https://i.pinimg.com/1200x/47/31/ed/4731ed4ade170d65b4341641fd5c3871.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1010, model: "X5", year: 2023, price: 2199, image: "https://i.pinimg.com/736x/0e/10/a4/0e10a47776683c658c18a8515445ade9.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1011, model: "X5", year: 2023, price: 2999, image: "https://i.pinimg.com/736x/7d/4e/49/7d4e495cad57b7ee63398241c28a91b7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1012, model: "X5", year: 2023, price: 1999, image: "https://i.pinimg.com/1200x/44/4a/52/444a520f0d6cde2933bee35f6536a7b7.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1013, model: "X5", year: 2023, price: 1999, image: "https://i.pinimg.com/1200x/fe/a7/b8/fea7b85adbfa07249ccea1cf51f86f20.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1014, model: "X5", year: 2023, price: 2299, image: "https://i.pinimg.com/1200x/4b/d3/5d/4bd35d15ab4a48d6a41a00a3ffd07ab6.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1015, model: "X5", year: 2023, price: 3999, image: "https://i.pinimg.com/736x/a6/a1/87/a6a1871f11eb44e8435e23f48be7fb9d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1016, model: "X5", year: 2023, price: 2999, image: "https://i.pinimg.com/736x/0f/fa/ee/0ffaeea3ef9dc6fa72f56fa6bf1c3de4.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1017, model: "X5", year: 2023, price: 1999, image: "https://i.pinimg.com/1200x/ca/97/27/ca97279b3afaccc5a1dfbcecce82323c.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1018, model: "X5", year: 2023, price: 1699, image: "https://i.pinimg.com/1200x/02/76/f0/0276f05724b7d02cb2cc325d03c8c4be.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        ]
    },

    {
        id: 16,
        name: "Sandals for women",
        description: "Price: $599 - $999",
        image: "https://i.pinimg.com/736x/85/85/1d/85851ddebb737917720b199fa060d26c.jpg",
        cars: [
            { id: 1001, model: "F-Type", year: 2023, price: 899, image: "https://i.pinimg.com/1200x/3d/f7/96/3df79611285cc06dbf0b2965053a19a6.jpg", specs: { engine: "V8", horsepower: 444, acceleration: "4.4s" } },
            { id: 1002, model: "F-Pace", year: 2023, price: 999, image: "https://i.pinimg.com/1200x/59/81/fc/5981fc38430849ecbf025f347d903576.jpg", specs: { engine: "Inline-6", horsepower: 395, acceleration: "5.1s" } },
            { id: 1003, model: "XE", year: 2023, price: 499, image: "https://i.pinimg.com/1200x/77/18/82/771882898618d73497d2a36fdc0d3886.jpg", specs: { engine: "Inline-4", horsepower: 246, acceleration: "6.4s" } },
            { id: 1004, model: "X5", year: 2023, price: 399, image: "https://i.pinimg.com/1200x/80/e1/d5/80e1d55d61c89fd14a1aeaad87219da6.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1005, model: "X5", year: 2023, price: 329, image: "https://i.pinimg.com/1200x/04/56/25/0456250b6d0fe63166238ff150e0eecb.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1006, model: "X5", year: 2023, price: 499, image: "https://i.pinimg.com/1200x/be/ef/5e/beef5ed30bff816c44268d2338f7f198.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1007, model: "X5", year: 2023, price: 799, image: "https://i.pinimg.com/736x/08/96/7e/08967e910408a6fdee60332ee92a3c4b.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1008, model: "X5", year: 2023, price: 899, image: "https://i.pinimg.com/1200x/35/fb/59/35fb59e73d9b8e7392e01b467646cdcd.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1009, model: "X5", year: 2023, price: 999, image: "https://i.pinimg.com/736x/65/81/d3/6581d31c444708e0a7c0d79ff20d651d.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1010, model: "X5", year: 2023, price: 899, image: "https://i.pinimg.com/736x/db/2f/0f/db2f0f852214a55f451a425362cf6e75.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1011, model: "X5", year: 2023, price: 499, image: "https://i.pinimg.com/736x/4d/5a/1e/4d5a1e566c10d913430eb764d5e5f4c0.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1012, model: "X5", year: 2023, price: 599, image: "https://i.pinimg.com/736x/ef/92/cd/ef92cd69dc36a571a8f0dedd099f5784.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
            { id: 1013, model: "X5", year: 2023, price: 999, image: "https://i.pinimg.com/736x/58/1a/3c/581a3c35f206be9a6b9e5c59292eb2f5.jpg", specs: { engine: "Inline-6", horsepower: 335, acceleration: "5.3s" } },
        ]
    }
];

// DOM Elements
const brandsGrid = document.getElementById('brandsGrid');
const carsModal = document.getElementById('carsModal');
const modalBrandTitle = document.getElementById('modalBrandTitle');
const carsGrid = document.getElementById('carsGrid');
const closeModal = document.getElementById('closeModal');
const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const overlay = document.getElementById('overlay');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('nav ul');

// Cart state
let cart = [];

// Initialize the page
function init() {
    renderBrands();
    setupEventListeners();
}

// Render brand cards
function renderBrands() {
    brandsGrid.innerHTML = '';
    brands.forEach(brand => {
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card';
        brandCard.innerHTML = `
                    <img src="${brand.image}" alt="${brand.name}" class="brand-img">
                    <div class="brand-info">
                        <h3 style="font-family: 'Poppins', sans-serif;">${brand.name}</h3>
                        <p style="font-family: 'Poppins', sans-serif;">${brand.description}</p>
                    </div>
                `;
        brandCard.addEventListener('click', () => openBrandModal(brand));
        brandsGrid.appendChild(brandCard);
    });
}

// Open brand modal with cars
function openBrandModal(brand) {
    modalBrandTitle.textContent = `${brand.name} Collection`;
    carsGrid.innerHTML = '';

    brand.cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
     <div class="card shadow-sm h-100">
  <img src="${car.image}" class="card-img-top" style="height: 400px; object-fit: cover;" alt="${brand.name} ${car.model}" style="height:200px; object-fit:cover;">
  <div class="card-body d-flex flex-column">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="card-title mb-0" style="font-family: 'Poppins', sans-serif;">${car.model}</h5>
      <span class="text-success fw-semibold">$${car.price.toLocaleString()}</span>
    </div>
    <button class="btn btn-primary w-100 mt-auto add-to-cart" style="font-family: 'Poppins', sans-serif;"
            data-id="${car.id}" 
            data-brand="${brand.name}" 
            data-model="${car.model}" 
            data-price="${car.price}" 
            data-image="${car.image}">
      Add to Cart
    </button>
  </div>
</div>


                `;


                


        carsGrid.appendChild(carCard);
    });

    const oth_object = document.getElementById('oth_object')
    const oth_car_grid = document.getElementById("oth_car_grid")

    function otherstate(brand) {
        oth_object.textContent = `${brand.name} its main`
        oth_car_grid.innerHTML = ''

        brands.cars.forEach(car => {

        })
    }

    carsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Close brand modal
function closeBrandModal() {
    carsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add item to cart
function addToCart(e) {
    const button = e.target;
    const id = button.getAttribute('data-id');
    const brand = button.getAttribute('data-brand');
    const model = button.getAttribute('data-model');
    const price = parseFloat(button.getAttribute('data-price'));
    const image = button.getAttribute('data-image');

    // Check if item already in cart
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id,
            brand,
            model,
            price,
            image,
            quantity: 1
        });
    }

    updateCart();

    // Visual feedback
    button.textContent = 'Added!';
    button.style.backgroundColor = '#4CAF50';
    setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.style.backgroundColor = '';
    }, 1000);
}

// Update cart UI
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = '$0';
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.brand} ${item.model}" class="cart-item-img">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.brand} ${item.model}</h4>
                        <div>$${item.price.toLocaleString()} x ${item.quantity} = $${itemTotal.toLocaleString()}</div>
                    </div>
                    <button class="remove-item" data-id="${item.id}">&times;</button>
                `;
        cartItems.appendChild(cartItem);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });

    cartTotal.textContent = `$${total.toLocaleString()}`;
}

// Remove item from cart
function removeFromCart(e) {
    const id = e.target.getAttribute('data-id');
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : 'auto';
}

// Toggle mobile menu
function toggleMobileMenu() {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Setup event listeners
function setupEventListeners() {
    closeModal.addEventListener('click', closeBrandModal);
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    overlay.addEventListener('click', toggleCart);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === carsModal) {
            closeBrandModal();
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
        });
    });
}



// Initialize the page
init();




