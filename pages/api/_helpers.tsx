import type { NextApiRequest, NextApiResponse } from "next";
import apiClient from "./_apiClient";

type TmdbHandler = (
  urlBuilder: (query: { [key: string]: string | string[] }) => string
) => (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export const getTmdbHandler: TmdbHandler = (urlBuilder) => async (req, res) => {
  if (req.method === "GET") {
    try {
      const { data } = await apiClient.get(urlBuilder(req.query));

      res.setHeader("Cache-Control", "max-age=3600, immutable");
      res.status(200).send(data);
    } catch (error) {
      res.status(error.response.status === 404 ? 404 : 503).end();
    }
  } else {
    res.status(501).end();
  }
};
