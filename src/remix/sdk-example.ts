import * as fs from 'fs';
import * as path from 'path';
// @ts-ignore - clack is ESM and TS complains about that. It works though
import clack from '@clack/prompts';
import { EXAMPLE_PAGE_TEMPLATE } from './templates';

/**
 * Creates an example Remix page to test Sentry
 */
export async function createExamplePage(isTS: boolean) {
    const exampleRoutePath = `app/routes/sentry-example.${isTS ? 'ts' : 'js'}x`

    if (fs.existsSync(exampleRoutePath)) {
        clack.log.warn(
            `It seems like a sentry example page already exists (${path.basename(
                exampleRoutePath,
            )}). Skipping creation of example route.`,
        )
        return
    }

    await fs.promises.writeFile(
        exampleRoutePath,
        EXAMPLE_PAGE_TEMPLATE,
    )

    clack.log.info(
        `Created sentry example page at ${exampleRoutePath}.`,
    )
}