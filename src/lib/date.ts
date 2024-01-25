import { format } from 'date-fns'

const dateToAge = (date: Date | null) => {
  if (!date) return ''
    const today = new Date()
    const birthDate = new Date(date)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}

const dateToHoroscope = (date?: Date | null) => {
    if (!date) return '--'
    let x = date.getMonth() * 100 + date.getDate()
    return x >= 221 && x <= 319
        ? 'Aries'
        : x >= 320 && x <= 420
        ? 'Taurus'
        : x >= 421 && x <= 520
        ? 'Gemini'
        : x >= 521 && x <= 622
        ? 'Cancer'
        : x >= 623 && x <= 722
        ? 'Leo'
        : x >= 723 && x <= 922
        ? 'Virgo'
        : x >= 823 && x <= 922
        ? 'Libra'
        : x >= 923 && x <= 1021
        ? 'Scorpio'
        : x >= 1022 && x <= 1121
        ? 'Sagittarius'
        : x >= 20 && x <= 118
        ? 'Aquarius'
        : x >= 119 && x <= 220
        ? 'Pisces'
        : 'Capricorn'
}

const dateToZodiac = (date?: Date | null) => {
    if (!date) return '--'
    const birthday = format(date, 'yyyyMMdd')
    let sign = '-'
    for (var yearIndex = 0; yearIndex < SIGNS.length; yearIndex++) {
        if (birthday >= SIGNS[yearIndex][0]) {
            sign = SIGNS[yearIndex][1]
            break
        }
    }
    return sign
}

export { dateToZodiac, dateToHoroscope, dateToAge }

const SIGNS = [
    ['20270206', 'goat'],
    ['20260217', 'horse'],
    ['20250129', 'snake'],
    ['20240210', 'dragon'],
    ['20230122', 'rabbit'],
    ['20220201', 'tiger'],
    ['20210212', 'ox'],
    ['20200125', 'rat'],
    ['20190205', 'pig'],
    ['20180216', 'dog'],
    ['20170128', 'rooster'],
    ['20160208', 'monkey'],
    ['20150219', 'goat'],
    ['20140131', 'horse'],
    ['20130210', 'snake'],
    ['20120123', 'dragon'],
    ['20110203', 'rabbit'],
    ['20100214', 'tiger'],
    ['20090126', 'ox'],
    ['20080207', 'rat'],
    ['20070218', 'pig'],
    ['20060129', 'dog'],
    ['20050209', 'rooster'],
    ['20040122', 'monkey'],
    ['20030201', 'goat'],
    ['20020212', 'horse'],
    ['20010124', 'snake'],
    ['20000205', 'dragon'],
    ['19990216', 'rabbit'],
    ['19980128', 'tiger'],
    ['19970207', 'ox'],
    ['19960219', 'rat'],
    ['19950131', 'pig'],
    ['19940210', 'dog'],
    ['19930123', 'rooster'],
    ['19920204', 'monkey'],
    ['19910215', 'goat'],
    ['19900127', 'horse'],
    ['19890206', 'snake'],
    ['19880217', 'dragon'],
    ['19870129', 'rabbit'],
    ['19860209', 'tiger'],
    ['19850220', 'ox'],
    ['19840202', 'rat'],
    ['19830213', 'pig'],
    ['19820125', 'dog'],
    ['19810205', 'rooster'],
    ['19800216', 'monkey'],
    ['19790128', 'goat'],
    ['19780207', 'horse'],
    ['19770218', 'snake'],
    ['19760131', 'dragon'],
    ['19750211', 'rabbit'],
    ['19740123', 'tiger'],
    ['19730203', 'ox'],
    ['19720215', 'rat'],
    ['19710127', 'pig'],
    ['19700206', 'dog'],
    ['19690217', 'rooster'],
    ['19680130', 'monkey'],
    ['19670209', 'goat'],
    ['19660121', 'horse'],
    ['19650202', 'snake'],
    ['19640213', 'dragon'],
    ['19630125', 'rabbit'],
    ['19620205', 'tiger'],
    ['19610215', 'ox'],
    ['19600128', 'rat'],
    ['19590208', 'pig'],
    ['19580218', 'dog'],
    ['19570131', 'rooster'],
    ['19560212', 'monkey'],
    ['19550124', 'goat'],
    ['19540203', 'horse'],
    ['19530214', 'snake'],
    ['19520127', 'dragon'],
    ['19510206', 'rabbit'],
    ['19500217', 'tiger'],
    ['19490129', 'ox'],
    ['19480210', 'rat'],
    ['19470122', 'pig'],
    ['19460202', 'dog'],
    ['19450213', 'rooster'],
    ['19440125', 'monkey'],
    ['19430205', 'goat'],
    ['19420215', 'horse'],
    ['19410127', 'snake'],
    ['19400208', 'dragon'],
    ['19390219', 'rabbit'],
    ['19380131', 'tiger'],
    ['19370211', 'ox'],
    ['19360124', 'rat'],
    ['19350204', 'pig'],
    ['19340214', 'dog'],
    ['19330126', 'rooster'],
    ['19320206', 'monkey'],
    ['19310217', 'goat'],
    ['19300130', 'horse'],
    ['19290210', 'snake'],
    ['19280123', 'dragon'],
    ['19270202', 'rabbit'],
    ['19260213', 'tiger'],
    ['19250124', 'ox'],
    ['19240205', 'rat'],
    ['19230216', 'pig'],
    ['19220128', 'dog'],
    ['19210208', 'rooster'],
    ['19200220', 'monkey'],
    ['19190201', 'goat'],
    ['19180211', 'horse'],
    ['19170123', 'snake'],
    ['19160203', 'dragon'],
    ['19150214', 'rabbit'],
    ['19140126', 'tiger'],
    ['19130206', 'ox'],
    ['19120218', 'rat'],
    ['19110130', 'pig'],
    ['19100210', 'dog'],
    ['19090122', 'rooster'],
    ['19080202', 'monkey'],
    ['19070213', 'goat'],
    ['19060125', 'horse'],
    ['19050204', 'snake'],
    ['19040216', 'dragon'],
    ['19030129', 'rabbit'],
    ['19020208', 'tiger'],
    ['19010219', 'ox'],
    ['19000131', 'rat'],
    ['19000000', 'pig'],
]
