function cutAndReverse(string) {

    let middleIndex = string.length / 2
    let leftHalf = string.split('').slice(0, middleIndex).reverse().join('');
    let rightHalf = string.split('').slice(middleIndex).reverse().join('');

    console.log(leftHalf);
    console.log(rightHalf);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');