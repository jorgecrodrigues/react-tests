import { AllTheProviders } from "../../../testUtils/Wrapper";
import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { useUsers } from "./useUsers";
import { users } from "../../../mocks/customApi";

const server = setupServer(
    // Requisição GET para o mock de usuários.
    rest.get("https://reqres.in/api/users", (req, res, ctx) => {
        //const page = parseInt(req.url.searchParams.get("page")  || "1");
        return res(
            ctx.delay(500),
            ctx.json(users),
        )
    })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test("should return users", async () => { 
    const { result, waitForNextUpdate } = renderHook(() => useUsers(), { wrapper: AllTheProviders });
    expect(result.current.isFetching).toEqual(true);
    expect(result.current.isLoading).toEqual(true);
    
    await waitForNextUpdate();

    expect(result.current.isFetching).toEqual(false);
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.data).toEqual({
        pageParams: [undefined],
        pages: [users]
    });
});