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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_1 = __importDefault(require("../models/Deck"));
function deleteDeck(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        //ia id-ul din url
        const deckId = yield req.params.deckId;
        //sterge item ul
        const deck = yield Deck_1.default.findByIdAndDelete(deckId);
        //trimitem mesaj ca a fost sters cu succes
        res.json(deck);
        console.log("succes");
    });
}
exports.default = deleteDeck;
