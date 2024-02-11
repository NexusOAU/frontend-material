
interface ISession {
    id: number,
    label: string,
    value: string
}

const generateSession = (from: number, to: number): ISession[] => {
    let sessions: ISession[] = [];

    for (let i = from; i < to; i++) {
        const label = `${i}/${i + 1}`;
        const value = `${i}`;
        const session: ISession = { id: i, label, value };
        sessions.push(session);
    }

    return sessions;
}

const currentYear = new Date().getFullYear()
// Example usage:
export const sessionData = generateSession(2005, currentYear).toReversed()

