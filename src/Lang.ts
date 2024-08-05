import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

export interface ILang extends LocalizedStringsMethods {
    nameDialog: string,
    namePlaceholder: string
}

const Lang: ILang = new LocalizedStrings({
    en: {
        nameDialog: "Please type a member's name here!",
        namePlaceholder: "[Insert name...]"
    },
    id: {
        nameDialog: "Tolong masukkan nama anggota di sini!",
        namePlaceholder: "[Masukkan nama...]"
    }
})

export default Lang
