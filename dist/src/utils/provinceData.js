"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preloadWesternData = exports.preloadSouthernData = exports.preloadEasternData = exports.preloadLuapulaData = exports.preloadNorthernData = exports.preloadNorthWesternData = exports.preloadMuchingaData = exports.preloadCopperbeltData = exports.preloadCentralData = exports.preloadLusakaData = void 0;
const district_1 = require("../models/district");
const province_1 = require("../models/province");
const preloadLusakaData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if province already exist in the database
        const existingProvinces = yield province_1.Province.find({ name: "Lusaka" });
        if (existingProvinces.length > 0) {
            console.log("Province already exist in the database");
            return;
        }
        const province = yield province_1.Province.create({ name: "Lusaka", capital: "Lusaka" });
        // check if districts already exist in the database
        const existingDistricts = yield district_1.District.find({ province: province._id });
        if (existingDistricts.length > 0) {
            console.log("Districts already exist in the database");
            return;
        }
        const districts = [
            { name: "Kafue", population: "", province: province._id },
            { name: "Chongwe", population: "", province: province._id },
            { name: "Chirundu", population: "", province: province._id },
            { name: "Chilanga", population: "", province: province._id },
            { name: "Rufunsa", population: "", province: province._id },
            { name: "Luangwa", population: "", province: province._id },
        ];
        yield district_1.District.create(districts);
        console.log("Data preloaded successfully");
    }
    catch (error) {
        console.log("Error preloading data: ", error.message);
    }
});
exports.preloadLusakaData = preloadLusakaData;
const preloadCentralData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if provinces already exist in the database
        const existingProvinces = yield province_1.Province.find({ name: "Central" });
        if (existingProvinces.length > 0) {
            console.log("Province already exist in the database");
            return;
        }
        const province = yield province_1.Province.create({ name: "Central", capital: "Kabwe" });
        // check if districts already exist in the database
        const existingDistricts = yield district_1.District.find({ province: province._id });
        console.log(existingDistricts);
        if (existingDistricts.length > 0) {
            // console.log("Districts already exist in the database");
            return;
        }
        // const province = await Province.find({ name: "Central" });
        const districts = [
            { name: "Chibombo", population: "", province: province._id },
            { name: "Chisamba", population: "", province: province._id },
            { name: "Chitambo", population: "", province: province._id },
            { name: "Kapiri Mposhi", population: "", province: province._id },
            { name: "Luano", population: "", province: province._id },
            { name: "Kabwe", population: "", province: province._id },
            { name: "Mkushi", population: "", province: province._id },
            { name: "Mumbwa", population: "", province: province._id },
            { name: "Ngabwe", population: "", province: province._id },
            { name: "Serenje", population: "", province: province._id },
            { name: "Shibuyunji", population: "", province: province._id },
        ];
        yield district_1.District.create(districts);
        console.log("Data preloaded successfully");
    }
    catch (error) {
        console.log("Error preloading data: ", error.message);
    }
});
exports.preloadCentralData = preloadCentralData;
const preloadCopperbeltData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if provinces already exist in the database
        const existingProvinces = yield province_1.Province.find({ name: "Copperbelt", });
        if (existingProvinces.length > 0) {
            console.log("Province already exist in the database");
            return;
        }
        const province = yield province_1.Province.create({ name: "Copperbelt", capital: "Ndola" });
        // await Province.create(province);
        // check if districts already exist in the database
        const existingDistricts = yield district_1.District.find({ province: province._id });
        if (existingDistricts.length > 0) {
            console.log("Districts already exist in the database");
            return;
        }
        // const province = await Province.find({ name: "Copperbelt" });
        const districts = [
            { name: "Chililabombwe", population: "", province: province._id },
            { name: "Chingola", population: "", province: province._id },
            { name: "Kalulushi", population: "", province: province._id },
            { name: "Kitwe", population: "", province: province._id },
            { name: "Luanshya", population: "", province: province._id },
            { name: "Lufwanyama", population: "", province: province._id },
            { name: "Masaiti", population: "", province: province._id },
            { name: "Mpongwe", population: "", province: province._id },
            { name: "Mufulira", population: "", province: province._id },
            { name: "Ndola", population: "", province: province._id },
        ];
        yield district_1.District.create(districts);
        console.log("Data preloaded successfully");
    }
    catch (error) {
        console.log("Error preloading data: ", error.message);
    }
});
exports.preloadCopperbeltData = preloadCopperbeltData;
const preloadMuchingaData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if provinces already exist in the database
        const existingProvinces = yield province_1.Province.find({ name: "Muchinga" });
        if (existingProvinces.length > 0) {
            console.log("Province already exist in the database");
            return;
        }
        const province = yield province_1.Province.create({ name: "Muchinga", capital: "Chinsali" });
        // await Province.create(province);
        // check if districts already exist in the database
        const existingDistricts = yield district_1.District.find({ province: province._id });
        if (existingDistricts.length > 0) {
            console.log("Districts already exist in the database");
            return;
        }
        // const province = await Province.find({ name: "Muchinga" });
        const districts = [
            { name: "Chinsali", population: "", province: province._id },
            { name: "Isoka", population: "", province: province._id },
            { name: "Mafinga", population: "", province: province._id },
            { name: "Mpika", population: "", province: province._id },
            { name: "Nakonde", population: "", province: province._id },
            { name: "Shiwang'andu", population: "", province: province._id },
            { name: "Kanchibiya", population: "", province: province._id },
            { name: "Lavushimanda", population: "", province: province._id },
        ];
        yield district_1.District.create(districts);
        console.log("Data preloaded successfully");
    }
    catch (error) {
        console.log("Error preloading data: ", error.message);
    }
});
exports.preloadMuchingaData = preloadMuchingaData;
const preloadNorthWesternData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if provinces already exist in the database
        const existingProvinces = yield province_1.Province.find({ name: "North-Western" });
        if (existingProvinces.length > 0) {
            console.log("Province already exist in the database");
            return;
        }
        const province = yield province_1.Province.create({ name: "North-Western", capital: "Solwezi" });
        // await Province.create(province);
        // check if districts already exist in the database
        const existingDistricts = yield district_1.District.find({ province: province._id });
        if (existingDistricts.length > 0) {
            console.log("Districts already exist in the database");
            return;
        }
        // const province = await Province.find({ name: "North-Western" });
        const districts = [
            { name: "Chavuma", population: "", province: province._id },
            { name: "Ikelenge", population: "", province: province._id },
            { name: "Kabompo", population: "", province: province._id },
            { name: "Kalumbila", population: "", province: province._id },
            { name: "Kasempa", population: "", province: province._id },
            { name: "Manyinga", population: "", province: province._id },
            { name: "Mufumbwe", population: "", province: province._id },
            { name: "Mushindamo", population: "", province: province._id },
            { name: "Mwinilunga", population: "", province: province._id },
            { name: "Solwezi", population: "", province: province._id },
            { name: "Zambezi", population: "", province: province._id },
        ];
        yield district_1.District.create(districts);
        console.log("Data preloaded successfully");
    }
    catch (error) {
        console.log("Error preloading data: ", error.message);
    }
});
exports.preloadNorthWesternData = preloadNorthWesternData;
const preloadNorthernData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if provinces already exist in the database
        const existingProvinces = yield province_1.Province.find({ name: "Northern", });
        if (existingProvinces.length > 0) {
            console.log("Province already exist in the database");
            return;
        }
        const province = yield province_1.Province.create({ name: "Northern", capital: "Kasama" });
        // await Province.create(province);
        // check if districts already exist in the database
        const existingDistricts = yield district_1.District.find({ province: province._id });
        if (existingDistricts.length > 0) {
            console.log("Districts already exist in the database");
            return;
        }
        // const province = await Province.find({ name: "Northern" });
        const districts = [
            { name: "Chilubi", population: "", province: province._id },
            { name: "Kaputa", population: "", province: province._id },
            { name: "Kasama", population: "", province: province._id },
            { name: "Luwingu", population: "", province: province._id },
            { name: "Mbala", population: "", province: province._id },
            { name: "Mporokoso", population: "", province: province._id },
            { name: "Mpulungu", population: "", province: province._id },
            { name: "Mungwi", population: "", province: province._id },
            { name: "Lupososhi", population: "", province: province._id },
            { name: "Senga Hill", population: "", province: province._id },
            { name: "Lunte", population: "", province: province._id },
            { name: "Nsama", population: "", province: province._id },
        ];
        yield district_1.District.create(districts);
        console.log("Data preloaded successfully");
    }
    catch (error) {
        console.log("Error preloading data: ", error.message);
    }
});
exports.preloadNorthernData = preloadNorthernData;
const preloadLuapulaData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if provinces already exist in the database
        const existingProvinces = yield province_1.Province.find({ name: "Luapula" });
        if (existingProvinces.length > 0) {
            console.log("Province already exist in the database");
            return;
        }
        const province = yield province_1.Province.create({ name: "Luapula", capital: "Mansa" });
        // await Province.create(province);
        // check if districts already exist in the database
        const existingDistricts = yield district_1.District.find({ province: province._id });
        if (existingDistricts.length > 0) {
            console.log("Districts already exist in the database");
            return;
        }
        // const province = await Province.find({ name: "Luapula" });
        const districts = [
            { name: "Chembe", population: "", province: province._id },
            { name: "Chiengi", population: "", province: province._id },
            { name: "Chipili", population: "", province: province._id },
            { name: "Kawambwa", population: "", province: province._id },
            { name: "Lunga", population: "", province: province._id },
            { name: "Mansa", population: "", province: province._id },
            { name: "Milenge", population: "", province: province._id },
            { name: "Mwansabombwe", population: "", province: province._id },
            { name: "Mwense", population: "", province: province._id },
            { name: "Nchelenge", population: "", province: province._id },
            { name: "Samfya", population: "", province: province._id },
        ];
        yield district_1.District.create(districts);
        console.log("Data preloaded successfully");
    }
    catch (error) {
        console.log("Error preloading data: ", error.message);
    }
});
exports.preloadLuapulaData = preloadLuapulaData;
const preloadEasternData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if provinces already exist in the database
        const existingProvinces = yield province_1.Province.find({ name: "Eastern" });
        if (existingProvinces.length > 0) {
            console.log("Province already exist in the database");
            return;
        }
        const province = yield province_1.Province.create({ name: "Eastern", capital: "Chipata" });
        // await Province.create(province);
        // check if districts already exist in the database
        const existingDistricts = yield district_1.District.find({ province: province._id });
        if (existingDistricts.length > 0) {
            console.log("Districts already exist in the database");
            return;
        }
        // const province = await Province.find({ name: "Eastern" });
        const districts = [
            { name: "Chadiza", population: "", province: province._id },
            { name: "Chama", population: "", province: province._id },
            { name: "Chasefu", population: "", province: province._id },
            { name: "Chipangali", population: "", province: province._id },
            { name: "Chipata", population: "", province: province._id },
            { name: "Kasenengwa", population: "", province: province._id },
            { name: "Katete", population: "", province: province._id },
            { name: "Lumezi", population: "", province: province._id },
            { name: "Lundazi", population: "", province: province._id },
            { name: "Lusangazi", population: "", province: province._id },
            { name: "Mambwe", population: "", province: province._id },
            { name: "Nyimba", population: "", province: province._id },
            { name: "Petauke", population: "", province: province._id },
            { name: "Sinda", population: "", province: province._id },
            { name: "Vubwi", population: "", province: province._id },
        ];
        yield district_1.District.create(districts);
        console.log("Data preloaded successfully");
    }
    catch (error) {
        console.log("Error preloading data: ", error.message);
    }
});
exports.preloadEasternData = preloadEasternData;
const preloadSouthernData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if provinces already exist in the database
        const existingProvinces = yield province_1.Province.find({ name: "Southern" });
        if (existingProvinces.length > 0) {
            console.log("Province already exist in the database");
            return;
        }
        const province = yield province_1.Province.create({ name: "Southern", capital: "Livingstone" });
        // await Province.create(province);
        // check if districts already exist in the database
        const existingDistricts = yield district_1.District.find({ province: province._id });
        if (existingDistricts.length > 0) {
            console.log("Districts already exist in the database");
            return;
        }
        // const province = await Province.find({ name: "Southern" });
        const districts = [
            { name: "Chikankata", population: "", province: province._id },
            { name: "Chirundu", population: "", province: province._id },
            { name: "Choma", population: "", province: province._id },
            { name: "Gwembe", population: "", province: province._id },
            { name: "Itezhi-Tezhi", population: "", province: province._id },
            { name: "Kalomo", population: "", province: province._id },
            { name: "Kazungula", population: "", province: province._id },
            { name: "Livingstone", population: "", province: province._id },
            { name: "Mazabuka", population: "", province: province._id },
            { name: "Monze", population: "", province: province._id },
            { name: "Namwala", population: "", province: province._id },
            { name: "Pemba", population: "", province: province._id },
            { name: "Siavonga", population: "", province: province._id },
            { name: "Sinazongwe", population: "", province: province._id },
            { name: "Zimba", population: "", province: province._id },
        ];
        yield district_1.District.create(districts);
        console.log("Data preloaded successfully");
    }
    catch (error) {
        console.log("Error preloading data: ", error.message);
    }
});
exports.preloadSouthernData = preloadSouthernData;
const preloadWesternData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // check if provinces already exist in the database
        const existingProvinces = yield province_1.Province.find({ name: "Western" });
        if (existingProvinces.length > 0) {
            console.log("Province already exist in the database");
            return;
        }
        const province = yield province_1.Province.create({ name: "Western", capital: "Mongu" });
        // await Province.create(province);
        // check if districts already exist in the database
        // check if districts already exist in the database
        const existingDistricts = yield district_1.District.find({ province: province._id });
        if (existingDistricts.length > 0) {
            console.log("Districts already exist in the database");
            return;
        }
        // const province = await Province.find({ name: "Western" });
        const districts = [
            { name: "Kalabo", population: "", province: province._id },
            { name: "Kaoma", population: "", province: province._id },
            { name: "Limulunga", population: "", province: province._id },
            { name: "Luampa", population: "", province: province._id },
            { name: "Lukulu", population: "", province: province._id },
            { name: "Mitete", population: "", province: province._id },
            { name: "Mongu", population: "", province: province._id },
            { name: "Mulobezi", population: "", province: province._id },
            { name: "Mwandi", population: "", province: province._id },
            { name: "Nalolo", population: "", province: province._id },
            { name: "Nkeyema", population: "", province: province._id },
            { name: "Senanga", population: "", province: province._id },
            { name: "Sesheke", population: "", province: province._id },
            { name: "Shangombo", population: "", province: province._id },
            { name: "Sikongo", population: "", province: province._id },
            { name: "Sioma", population: "", province: province._id },
        ];
        yield district_1.District.create(districts);
        console.log("Data preloaded successfully");
    }
    catch (error) {
        console.log("Error preloading data: ", error.message);
    }
});
exports.preloadWesternData = preloadWesternData;
