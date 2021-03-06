/**
 * @Author: HuaChao Chen <CHC>
 * @Date:   2017-05-06T21:40:39+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: config.js
 * @Last modified by:   CHC
 * @Last modified time: 2017-05-06T22:12:49+08:00
 * @License: MIT
 * @Copyright: 2017
 * @desc 初始化配置项
 */

import help_zh_CN from './lang/zh-CN/help_zh-CN.md'
import help_en from './lang/en/help_en.md'
import help_fr from './lang/fr/help_fr.md'
import help_pt_BR from './lang/pt-BR/help_pt-BR.md'
import words_zh_CN from './lang/zh-CN/words_zh-CN.json'
import words_en from './lang/en/words_en.json'
import words_fr from './lang/fr/words_fr.json'
import words_pt_BR from './lang/pt-BR/words_pt-BR.json'
export const CONFIG = {
    'help_zh-CN': help_zh_CN,
    'help_pt-BR': help_pt_BR,
    'help_en': help_en,
    'help_fr': help_fr,
    'words_zh-CN': words_zh_CN,
    'words_pt-BR': words_pt_BR,
    'words_en': words_en,
    'words_fr': words_fr,
    'langList': ['en', 'zh-CN', 'fr', 'pt-BR'],
    'toolbars': {
        'bold': true,
        'italic': true,
        'header': true,
        'underline': true,
        'strikethrough': true,
        'mark': true,
        'superscript': true,
        'subscript': true,
        'quote': true,
        'ol': true,
        'ul': true,
        'link': true,
        'imagelink': true,
        'code': true,
        'table': true,
        'undo': true,
        'redo': true,
        'trash': true,
        'save': true,
        'alignleft': true,
        'aligncenter': true,
        'alignright': true,
        'navigation': true,
        'subfield': true,
        'fullscreen': true,
        'readmodel': true,
        'htmlcode': true,
        'help': true,
        'preview': true
    }
};