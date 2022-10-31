export const GET_ALL_NOVEL = `
    *[_type == 'story'] {
        _id,
        _createdAt,
        title
    }
`;
export const GET_DETAIL_NOVEL = `
*[_type == 'story' && _id match $IdNovel] {
    content,
    vocabularies
}
`;
