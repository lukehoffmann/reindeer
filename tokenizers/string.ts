import { Token } from "../token";
import { TokenResult } from "../tokenresult";
import { TokenType } from "../tokentype";
import { BaseTokenizer } from "./base";

export class StringTokenizer extends BaseTokenizer {
    constructor() {
        super(TokenType.String, "String")
    }
    public nextToken(input: string, current: number): TokenResult | null {
        if (input[current] === '"') {
            let value = '';
            let consumedChars = 0;
            consumedChars++;
            let char = input[current + consumedChars];
            while (char !== '"') {
                if (char === undefined) {
                    throw new TypeError("unterminated string ");
                }
                value += char;
                consumedChars++;
                char = input[current + consumedChars];
            }
            return new TokenResult(consumedChars + 1, new Token(TokenType.String, value, current));
        }
        return null
    }
}