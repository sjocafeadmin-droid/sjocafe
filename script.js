const tableIds = [
    "de86f9", "9d8063", "c7649b", "ff9de0", "e89325",
    "dce51a", "df5042", "b9c007", "d7a20a", "6f668f",
    "99c4a1", "c80bc5", "dc5028", "05e3aa", "cdcc42",
    "8b72ef", "c150d6", "10356d", "5a2751", "577e90",
    "75b09c", "1adb57", "d53f57", "830d10", "fbe88d",
    "9e3f74", "6dc6c2", "9098c6", "ef6d55", "d7b028",
    "1ba81e", "83cf42", "707652", "b55bfa", "042920",
    "b4c53f", "0f939b", "9313dd", "f0cb24", "c2e77f",
    "f57575", "5916f7", "26f58e", "92b416", "2d8452",
    "1d82b8", "5023a2", "e672fa", "d786e8", "0eb426",
    "7d402c", "26da60", "6278bd", "18bd30", "1c11df",
    "b68843", "e34406", "81766b", "104253", "e4e78b",
    "7a4554", "73fcd8", "8663ea", "98abc9", "150599",
    "173225", "515c19", "3675cd", "c9fd60", "92f2eb"
];

const baseOrderUrl = "https://qopla.com/restaurant/sjocafé-lovstabadet/qYx7PoO91D/order?tableId=";

const params = new URLSearchParams(window.location.search);
const bord = Number(params.get("bord"));

const orderButton = document.getElementById("orderButton");

if (bord >= 1 && bord <= 70) {
    const tableId = tableIds[bord - 1];
    orderButton.href = `${baseOrderUrl}${tableId}&qr=1`;
} else {
    orderButton.href = "https://qopla.com/restaurant/sjocafé-lovstabadet/qYx7PoO91D/order?qr=1";
}
