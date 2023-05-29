import React from 'react';
import Link from 'next/link';
import getProvince from 'lib/getProvince';

type Params = {
    params: {
        provinceName: string,
    }
}
export default function provincePage({ params: { provinceName } }: Params) {
    const { education, health, misc }: Option = getProvince(provinceName);

    return (
        <>
            {education && <li><Link href="/">آموزش</Link></li>}
            {health && <li><Link href="/">بهداشت</Link></li>}
            {misc && <li><Link href="/">سایر موارد</Link></li>}
        </>
  )
}
